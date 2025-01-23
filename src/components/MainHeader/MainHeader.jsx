/**@jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { LuUserRoundPlus, LuLogIn, LuLogOut, LuUser, LuLayoutList, LuNotebookPen } from "react-icons/lu";
import { authUserIdAtomState } from '../../atoms/authAtom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
// "name": "react_study",
// "version": "0.1.0",
// "private": true,
// "dependencies": {
//   "@emotion/react": "^11.14.0",
//   "@testing-library/jest-dom": "^5.17.0",
//   "@testing-library/react": "^13.4.0",
//   "@testing-library/user-event": "^13.5.0",
//   "axios": "^1.7.9",
//   "cra-template": "1.2.0",
//   "react": "^18.3.1",
//   "react-dom": "^18.3.1",
//   "react-icons": "^5.4.0",
//   "react-router-dom": "^7.1.3",
//   "react-scripts": "5.0.1",
//   "web-vitals": "^4.2.4" package.json 파일에 버전 확인해야함 icons, emotion, dom, axios 등
function MainHeader({ props }) {
    const queryClient = useQueryClient();
   
    const userId = queryClient.getQueryData(["authenticatedUserQuery"])?.data.body;
    // const [loadStatus, setLoadStatus] = useState("idle"); //loading(로딩중), success(완료), idle(대기상태)

    const getUserApi = async () => {
        return await axios.get("http://localhost:8080/servlet_study_war/api/user", {
            headers: { //인증요청엔 headers 붙인다다
                "Authorization": "Bearer " + localStorage.getItem("AccessToken"),
            },
            params: {
                "userId": userId,
            }
        });
    }
 
    const getUserQuery = useQuery(
        ["getUserQuery", userId],
        getUserApi,
        {
            refetchOnWindowFocus:false,
            enabled: !!userId,
        }
    );

    return (
        <div css={s.layout}>
            <div css={s.leftContainer}>
                <Link to={"/"}><h1>미니 게시판 프로젝트</h1></Link>
                <ul>
                    <Link to={"/list"}>
                        <li>
                            <LuLayoutList />게시글 목록
                        </li>
                    </Link>
                    <Link to={"/write"}>
                        <li>
                            <LuNotebookPen />게시글 작성
                        </li>
                    </Link>
                </ul>
            </div>

            <div css={s.rightContainer}>
                {
                    !!userId ?
                        <ul>
                            <Link to={"/mypage"}>
                                <li>
                                    <LuUser />{getUserQuery.isLoading ? "" : getUserQuery.data.data.username}
                                </li>
                            </Link>
                            <Link to={"/logout"}>
                                <li>
                                    <LuLogOut />로그 아웃
                                </li>
                            </Link>
                        </ul>
                        :
                        <ul>
                            <Link to={"/signin"}>
                                <li>
                                    <LuLogIn />로그인
                                </li>
                            </Link>
                            <Link to={"/signup"}>
                                <li>
                                    <LuUserRoundPlus />회원 가입
                                </li>
                            </Link>
                        </ul>
                }
            </div>
        </div>
    );
}

export default MainHeader;