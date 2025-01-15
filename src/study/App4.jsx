import React, { useState } from 'react';

function App4(props) {
    //비어있는 문자열 표기 : ("");
   

    const[ userInfo, setUserInfo ] = useState({
        name:"",
        gender:"",
    });

    const [ inputValue, setInputValue ] = useState({
        name:"",
        gender:"male",
    });

    
    const handleInputOnChange = (e) => {
        const { name, value } = e.target;

        setInputValue({
          ...inputValue,
          [name]: value,
        });
        
    }
    const handleOkOnClick = () => {
        setUserInfo({
            name: inputValue.name,
            gender: inputValue.gender === "male" ? "남" : "여",
        });
        setInputValue({
            ...inputValue,
            name: "",
        });
    }

    return (
        <div>
            <h1>이름 : {userInfo.name}({userInfo.gender})</h1>
            <input type="text" name="name" onChange={handleInputOnChange} value={inputValue.name} />
            
            <input type="radio" id="male" name="gender"  onChange={handleInputOnChange} checked={inputValue.gender === "male"} value={"male"} />
            <label htmlF    or="male">남</label>
            
            <input type="radio" id="female" name="gender"  onChange={handleInputOnChange} checked={inputValue.gender === "female"} value={"female"} />
            <label htmlFor="female">여</label>
            
            <button onClick={handleOkOnClick}>확인</button>


        </div>
        //위의 input을 쓸때 약속처럼 value를 넣고 값을 넣어줘라라
    );
}

export default App4;