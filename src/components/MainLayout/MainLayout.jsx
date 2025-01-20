/**@jsxImportSource @emotion/react */ 
//jsx에서 css 스타일링, 기능을 사용할수있도록하는 주석

import MainHeader from '../MainHeader/MainHeader';
import * as s from './style';   
//javascriptreact.json 파일에 ej누르면 위의 코드 자동완성 설정. 다른 설정도 가능
function MainLayout( {children} ) {


    return (
        <div css ={s.layout}>
            <MainHeader />
            {children}

        </div>
    );
}

export default MainLayout;