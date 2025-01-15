import React, { useState } from 'react';

function Signin({ userList }) {

    

    const [signInInputValue, setSignInInputValue] = useState({
        username: "",
        password: "",
    });

    const handleSignInInputOnChange = (e) => {//4
        setSignInInputValue({
            ...signInInputValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignInButtonOnClick = () => { //5
        const foundUser = userList.find(user => user.username === signInInputValue.username);
        if (!foundUser) {
            alert("사용자정보를 다시 확인하세요");
            return;
        }
        if (foundUser.password !== signInInputValue.password) {
            alert("사용자정보를 다시 확인하세요");
            return;
        }
        alert(`${foundUser.name}(${foundUser.email})님 환영합니다`);
    }

    return (
        <div>
            <h1>로그인</h1>
            <input type="text" name="username" placeholder='username' onChange={handleSignInInputOnChange} value={signInInputValue.username}/>
            <input type="password" name='password' placeholder='password'onChange={handleSignInInputOnChange} value={signInInputValue.password} />
            <div>
                <button onClick={handleSignInButtonOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default Signin;