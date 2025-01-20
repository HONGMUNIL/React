import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
    border-bottom: 2px solid #dbdbdb;
` ;


export const leftContainer = css`
    & > h1{
        margin: 0;
        font-size: 26px;
        cursor: pointer;

    }
`;

export const rightContainer = css`
    display: flex;
    align-items: center;

`;

