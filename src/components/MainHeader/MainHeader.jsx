/**@jsxImportSource @emotion/react */
import { Link, useNavigate } from 'react-router-dom';
import * as s from './style';

import { LuUserRoundPlus, LuLogIn, LuLogOut, LuUser, LuLayoutList, LuNotebookPen } from "react-icons/lu";
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { accessTokenAtomState } from '../../atoms/authAtom';
import { useEffect } from 'react';

function MainHeader(props) {
    const naviagte = useNavigate();
    const queryClient = useQueryClient();
    const userId = queryClient.getQueryData(["authenticatedUserQuery"])?.data.body;
    const [ accessToken, setAccessToken ] = useRecoilState(accessTokenAtomState);

    console.log(queryClient.getQueryCache());

    const getUserApi = async () => {
        return await axios.get("http://localhost:8080/servlet_study_war/api/user", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("AccessToken"),
            },
            params: {
                "userId": userId,
            }
        });
    }

    const getUserQuery = useQuery(
        ["getUserQuery"],
        getUserApi,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !!userId,
        }
    );

    const handleLogoutOnClick = () => {
        localStorage.removeItem("AccessToken");
        console.log(localStorage.getItem("AccessToken"));
        setAccessToken(localStorage.getItem("AccessToken"));
        queryClient.removeQueries(["authenticatedUserQuery"]);

        naviagte("/signin");
    }


    return (
        <div css={s.layout}>
            <div css={s.leftContainer}>
                <Link to={"/"} ><h1>미니 게시판 프로젝트</h1></Link>
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
                        <Link to={"/mypage"} >
                            <li><LuUser />{getUserQuery.isLoading ? "" : getUserQuery.data.data.body.username}</li>
                        </Link>
                        <a onClick={handleLogoutOnClick} >
                            <li><LuLogOut />로그아웃</li>
                        </a>
                    </ul>
                    :
                    <ul>
                        <Link to={"/signin"} >
                            <li><LuLogIn />로그인</li>
                        </Link>
                        <Link to={"/signup"} >
                            <li><LuUserRoundPlus />회원가입</li>
                        </Link>
                    </ul>
                }
            </div>
        </div>
    )
}

export default MainHeader;