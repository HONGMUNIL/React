/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useRef, useState } from 'react';

function SignupPage(props) {

    const [inputRefs ] = useState([ useRef().useRef().useRef().useRef() ]);
    const [ buttonRefs ] = useState( [useRef() ]);
    const [ inputValue, setInputValue]= userState({
        username: "",
        password:   "",
        name:"",
        email:"",
    });;


    const handlleInputOnChange =() => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        });
    }

    const handleInputOnKeyDown = (e) => {
        if(e.keyCode ===13){
            let foundIndex = -1;
            for(let i = 0; i < inputRefs.length; i++){
                if(inputRefs[i].current === e.target){
                    foundIndex = i;
                    break;
                }
            }
            if(foundIndex === inputRefs.length -1){
                buttonRefs[0].current.click();
                return;
            }

            inputRefs[foundIndex +1].current.focus();
        }
    }


    return (
        <div>
            <div>
                <input type="text" placeholder='사용자 이름' name='username' value={inputValue.username} onChange={handlleInputOnChange} onKeyDown={handleInputOnKeyDown} ref={inputRefs[0]}/>
                <input type="password" placeholder='비밀번호' name='passwor' value={inputValue.password} onChange={handlleInputOnChange} onKeyDown={handleInputOnKeyDown} ref={inputRefs[1]}/>
                <input type="text" placeholder='성명' name='name' value={inputValue.name} onChange={handlleInputOnChange} onKeyDown={handleInputOnKeyDown} ref={inputRefs[2]}/>
                <input type="text" placeholder='이메일' name='email' value={inputValue.email} onChange={handlleInputOnChange} onKeyDown={handleInputOnKeyDown} ref={inputRefs[3]}/>
                <button ref={ buttonRefs[0] }>가입</button>
            </div>
            <div>
                <span>계정이 있으신가요?</span>
                <Link to={"/signin"}>로그인</Link>
            </div>
        </div>
    );
}

export default SignupPage;