import { atom } from "recoil";
//서버랑 클라이언트의 요청이랑 관리할 전역상태는 react-query
//서버 전체 전역상태에 저장 하려면 atom 
// react-query와 atom은 다른것이다
// export const authUserIdAtomState = atom({ //atom은 전역상태를 뜻한다다
//     key: "authUserIdAtomState",
//     default: 0,
//          //default는 value(초기값)
// }); 


export const accessTokenAtomState = atom({
    key: "accessTokenAtomState",
    default: localStorage.getItem("AccessToken"),
});