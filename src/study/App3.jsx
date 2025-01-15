import React, { useState } from 'react';

function App3(props) {

    const [name, setName] = useState(""); //비어있는 문자열 표기 : ("");
    const [gender, setGender] = useState("");
    const [nameInputText, setNameInputText] = useState("");
    const [genderCheckedId, setGenderCheckedId] = useState("");

    console.log(nameInputText);

    const handleNameInputOnChange = (e) => {
        setNameInputText(e.target.value)
        
    }
    const handleOkOnClick = () => {
        setName(nameInputText)
        setNameInputText("")
    }

    const handleGenderOnChange = (e) => {

    }

    return (
        <div>
            <h1>이름 : {name}</h1>
            <input type="text" onChange={handleNameInputOnChange} value={handleOkOnClick} />
            
            <input type="radio" id="male" name="gender" value={"남"} />
            <label htmlFor="male">남</label>
            
            <input type="radio" id="female" name="gender" value={"여"} />
            <label htmlFor="female">여</label>
            
            <button onClick={handleOkOnClick}>확인</button>


        </div>
        //위의 input을 쓸때 약속처럼 value를 넣고 값을 넣어줘라라
    );
}

export default App3;