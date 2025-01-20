/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';

// "name": "react_study",
// "version": "0.1.0",
// "private": true,
// "dependencies": {
//   "@emotion/react": "^11.14.0",
//   "@testing-library/jest-dom": "^5.17.0",
//   "@testing-library/react": "^13.4.0",
//   "@testing-library/user-event": "^13.5.0",
//   "axios": "^1.7.9",
//   "cra-template": "1.2.0",
//   "react": "^18.3.1",
//   "react-dom": "^18.3.1",
//   "react-icons": "^5.4.0",
//   "react-router-dom": "^7.1.3",
//   "react-scripts": "5.0.1",
//   "web-vitals": "^4.2.4" package.json 파일에 버전 확인해야함 icons, emotion, dom, axios 등
function MainHeader({ props }) {
    return (
        <div css={s.layout}>
            <div css={s.leftContainer}>
                <h1>미니 게시판 프로젝트</h1>
            </div>

            <div css={s.rightContainer}>

            </div>
        </div>
    );
}

export default MainHeader;