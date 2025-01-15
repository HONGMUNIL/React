import ReactDOM from 'react-dom/client';
import App2 from './study/App2';
import App from './study/App';
import App3 from './study/App3';
//import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />); //보여지는것 렌더링
              //리액트에서 사용되는 태그들을 JSX라고한다
 

//root.render(<App2 />);
root.render(<App3 />);




  /*<React.StrictMode>
    <App />  
  </React.StrictMode> // <App/> 호출 App.js에있는 
  // function호출 function안에 return안에 html코드있으면 컴포넌트트
  하나의 폴더안에 하나의 컴포넌트만!!

*/

