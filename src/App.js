import { Route, Routes, useLocation } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import WritePage from "./pages/WritePage/WritePage";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainLayout from "./components/MainLayout/MainLayout";
import ListPage from "./pages/ListPage/ListPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authUserIdAtomState } from "./atoms/authAtom";
import { useQuery } from "react-query";

function App() {//useState(0)이라는것은 로그인이 안된 것(로그아웃상태)
  // const [userId, setUserId ] = useRecoilState(authUserIdAtomState);//authUserIdAtomState(전역상태)를 가져와서 다른곳에도사용가능
  // const location = useLocation(); //경로확인


  const authenticatedUser = async () =>{
   
    return await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("AccessToken")}`, //요청 날릴때 isLoading
        }//headers의 키값은 Authorization로 정해져있다
      });
  }

  
  const authenticatedUserQuery = useQuery(
    ["authenticatedUserQuery"],
     authenticatedUser,
    {
     refetchOnWindowFocus: false,
      enabled: !!localStorage.getItem("AccessToken"),
      
    }
   );
   console.log(authenticatedUserQuery.isLoading);
 

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("AccessToken");
  //   if(!!accessToken){ //accessToken이 있으면 검사한다다
  //     authenticatedUser(accessToken);
  //   }
  // }, [location.pathname]); //pathname은경로(/api/signin)

  return (
    <>
      <Global styles={global} />

    {
       authenticatedUserQuery .isLoading ? <></>
    :
      <MainLayout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </MainLayout>
}
    </>
  );
}

export default App;