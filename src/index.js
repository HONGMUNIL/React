import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes } from 'react-router-dom';


// import App2 from './study/App2';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);




// root.render(<App />); //보여지는것 렌더링
              //리액트에서 사용되는 태그들을 JSX라고한다
 

//root.render(<App2 />);
//root.render(<App3 />);
//root.render(<App4 />);
//root.render(<App5 />);

//root.render(<App6 />);
// root.render(<App7 />);
// root.render(<App8 />);
// root.render(<App9 />);
// root.render(<App10 />);

// root.render(<App11 />);
// root.render(<App12 />);
// root.render(<App13 />);

// root.render(<App14 />);


  /*<React.StrictMode>
    <App />  
  </React.StrictMode> // <App/> 호출 App.js에있는 
  // function호출 function안에 return안에 html코드있으면 컴포넌트트
  하나의 폴더안에 하나의 컴포넌트만!!

*/

