import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 10px 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border-bottom: 2px solid #dbdbdb;

    & a{
        color: #222222;
        text-decoration: none;

    }

    & ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        
    }
` ;


export const leftContainer = css`
    display: flex;
    align-items: center;



    & > a > h1{
        margin: 0;
        margin-right: 20px;
        font-size: 26px;
        cursor: pointer;

    }


    & > ul{
        display: flex;
        & li{
            box-sizing: border-box;
            
            display: flex;
            align-items: center;
            color: #666666;
            margin-left: 30px;
            padding: 5px 10px;
            font-weight: 600;
            transition: all 0.2s ease-in-out;
            &:hover{
                transform: scale(110%);
                color: #222222;
            }

            & > svg{
                margin-right: 5px;
            }
        }
    }
`;

export const rightContainer = css`
    display: flex;
    align-items: center;
    

    & > ul{
        display: flex;
        & li{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
            padding: 5px 3px 3px;
            font-size: 14px;
            font-weight: 600;
            
            transition: all 0.2s ease-in-out;

            &::after{
                content: "";
                position: absolute;
                bottom: 0;
                border: 0px solid #222222;
                width: 0%;
                transition: all 0.2s ease-in-out;

            }
            &:hover::after{
                border: 1px solid #222222;
                width: 100%;
            }

            & > svg{
                margin-right: 5px;
            }
        }
    }
`;

