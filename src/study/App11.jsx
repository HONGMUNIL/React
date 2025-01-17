import React from 'react';


/**비동기
 * Promise(resolve, reject)
 * then, catch, finally
 * 
 * async / await
 * try, catch, finally
 * 
 * 
 */
function App11(props) {

    // const mount = () =>{

    // };

    // setTimeout(() => {
    //     console.log("1");
    //     console.log("2");
    //     setTimeout(() => {
    //         console.log("3");
    //     }, 2000);
    // }, 3000);

    //resolve : 결정하다
    //reject : 거부하다

    //Promise 생성자는 생성되어지면 안에서 호출을한다, 즉 실행을 한다!!
    const isSuccess = false;


    const isSuccess2 = true;


    console.log("1번");

    const p1 = new Promise((resolve, reject) => {
        console.log("Promise1 생성!!");
        if (isSuccess) {
            resolve();
        } else {
            reject();
        }
    });

    p1. then(()=> { //false니까 p1은 출력하지않고 밑의 p2호출로 가서 p2출력한다음 다시 p1의의 catch로간다
        console.log("p1 then 호출");
    }).catch(()=>{  //reject니까 호출된다
        console.log("p1 catch 호출");
    });
    //then은 나중을 미뤄져서 호출된다(말그대로 Promise는 약속하는것 나중에 실행할거야~하고)
     //  resolve랑 reject는 우선순위가 두번쨰라서!!
     


    console.log("2번");
    const p2 = new Promise((resolve, reject) => {
        console.log("Promise2 생성!!");
        if (isSuccess2) {
            resolve();
        } else {
            reject();
        }
    });

    p2.then(() => {
        console.log("p2 then 호출");
    }).then(()=> {
        console.log("p2 2번쨰 then 호출");
    });

    const p3 = new Promise((resolve, reject) => {
        console.log("Promise3 생성!!");

        const response = {
            status:200,
            data: {
                username:"aaa",
                password:"1234",
            }
        }

        if (true) {
            resolve({response}); 
            // response:{
            //     status:200,
            //     data: {
            //         username:"aaa",
            //         password:"1234",
            //     }
            // } 위의 response는 이 코드와 같다
        } else {
            reject();
        }
    });

    p3.then((r) => {
        console.log(r);
        if(true){//throw면 무조건 catch이다다 
            throw new Error("오류!!!");
        }
        return {// return이면 무조건 then이다다
            response: {
                ...r.response,
                data:{
                    ...r.response.data,
                    name:"홍문일",
                    email:"aaa@gmail.com",
                }
            }
        }
    }).then((r)=>{
        console.log(r);
    }).catch((error)=>{
        console.error(error);
    });


    const p4 = new Promise((resolve, reject) => {
        console.log("Promise4 생성!!");

        const response = {
            status:400,
            data: {
                errorMessage: "문자열 형식이 맞지 않습니다.",
            },
        }
        if (false) {
            resolve({response}); 
        
        } else {
            reject(new Error(JSON.stringify({response})));
        }
    });

    p4.catch((error) => {
        console.error(error);
    });


    return (
        <div>

        </div>
    );
}

export default App11;