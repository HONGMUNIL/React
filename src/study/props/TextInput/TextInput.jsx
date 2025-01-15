function TextInput({id, text}){
    const user = {
        username : "test",
        password : "1234",
        name : "홍문일",
    };
    
    const {username, name} = user;
    console.log(username);

    
    return <div>

        <label htmlFor={id}>{text}</label>
        <input type="text" id={id}></input>

    </div>
}


export default TextInput;