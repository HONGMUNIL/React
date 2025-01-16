import React, { useState } from 'react';

function App10(props) {

    const [ num1, setNum1] = useState(0);
    const [ num2, setNum2] = useState(0);


    const handleOnClick = () =>{

    };


    return (
        <div>
            <h1>Num1: {num1}</h1>
            <h1>Num2: {num2}</h1>


            <button onClick={handleOnClick}>클릭</button>
        </div>
    );
}

export default App10;