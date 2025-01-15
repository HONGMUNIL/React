import React, { useState } from 'react';

/**
 * 회원 정보를 입력받아 userList에 user 객체들을 가입하기 버튼을 누를 떄 마다 저장한다
 * 로그인 정보를 입력받아 userList에 해당 username이 있는지 확인하고
 * 없으면 '사용자 정보를 다시 확인하세요' 메세지 출력(alert)
 * 있으면 비밀번호가 일치하는지 검사
 * 비밀번호가 일치하지 않으면 '사용자 정보를 다시 확인하세요.' 메세지출력(alert)
 * 일치하면 이름(이메일)님 환영합니다. 출력(alert)
 * 
 */

function App5(props) {
   
    const [userList, setUserList] = useState([]);

    const [signupInputValue, setSignupInputValue] = useState({ //1
        username: "",
        password: "",
        name: "",
        email: "",
    });
  
        const [ signInInputValue, setSignInInputValue] = useState({
            username : "",
            password : "",
        });


    const handleSignupInputOnChange = (e) => { //2

        setSignupInputValue({
            ...signupInputValue, //초기화되니까 스프레드로 가져와라라
            [e.target.name]: e.target.value,
        });
    }


    const handleSignupButtonOnClick = () =>{ //3
        setUserList([
            ...userList,
            signupInputValue,
        ]);;
        alert("가입 완료");
        setSignupInputValue({
            username: "",
            password: "",
            name: "",
            email: "",
        });
    }

    const handleSignInInputOnChange =(e) => {//4
        setSignInInputValue({
            ...signInInputValue,
            [e.target.name] : e.target.value,
        });
    };

    const handleSignInButtonOnClick = () =>{ //5
       const foundUser = userList.find(user => user.username === signInInputValue.username);
        if(!foundUser){
            alert("사용자정보를 다시 확인하세요");
            return;
        }
        if(foundUser.password !== signInInputValue.password){
            alert("사용자정보를 다시 확인하세요");
            return;
        }
        alert(`${foundUser.name}(${foundUser.email})님 환영합니다`);
    }  

    return (
        <div>
            <h1>회원가입</h1>
            <input type="text" name="username" placeholder='username' onChange={handleSignupInputOnChange} value={signupInputValue.username}/>
            <input type="password" name='password' placeholder='password' onChange={handleSignupInputOnChange} value={signupInputValue.password}/>
            <input type="text" name='name' placeholder='name' onChange={handleSignupInputOnChange} value={signupInputValue.name}/>
            <input type="text" name='email' placeholder='email' onChange={handleSignupInputOnChange} value={signupInputValue.email}/>
            
            <div>
                <button onClick={handleSignupButtonOnClick}>가입하기</button>
            </div>

            <h1>로그인</h1>
            <input type="text" name="username" placeholder='username' onChange={handleSignInInputOnChange} value={signInInputValue.username}/>
            <input type="password" name='password' placeholder='password'onChange={handleSignInInputOnChange} value={signInInputValue.password} />
            <div>
                <button onClick={handleSignInButtonOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default App5;