import React, { useState } from 'react';

function App3(props) {

    const [name, setName] = useState(""); //비어있는 문자열 표기 : ("");
    const [gender, setGender] = useState("");
    const [nameInputValue, setNameInputValue] = useState("");
    const [genderInputValue, setGenderInputValue] = useState("male");

   

    const handleNameInputOnChange = (e) => {
        setNameInputValue(e.target.value)
        
    }
    const handleOkOnClick = () => {
        setName(nameInputValue)
        setNameInputValue("")
        setGender(genderInputValue === "male" ? "남" : "여");
    }

    const handleGenderInputOnChange = (e) => {
        setGenderInputValue(e.target.id);
    }

    return (
        <div>
            <h1>이름 : {name}({gender})</h1>
            <input type="text" onChange={handleNameInputOnChange} value={nameInputValue} />
            
            <input type="radio" id="male" name="gender" checked={genderInputValue === "male"} onChange={handleGenderInputOnChange} value={"male"} />
            <label htmlFor="male">남</label>
            
            <input type="radio" id="female" name="gender" checked={genderInputValue === "female"} onChange={handleGenderInputOnChange} value={"female"} />
            <label htmlFor="female">여</label>
            
            <button onClick={handleOkOnClick}>확인</button>


        </div>
        //위의 input을 쓸때 약속처럼 value를 넣고 값을 넣어줘라라
    );
}

export default App3;