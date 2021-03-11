import {css, keyframes} from "@emotion/react";
import {injectGlobal} from "@emotion/css";

injectGlobal`
    body, html {
        height: 100%;
        margin: 0;
        overflow: hidden;
        @font-face {
            font-family: "Roboto";
            src: url(fonts/"Roboto-Bold.ttf") format("truetype");
            font-display: block;
        }
     }
`;

export const SpaceStyle = css`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 4096px;
    background: url("images/background.png");
    background-size: cover;
    overflow: hidden;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`;

export const FallingAreaStyle = css`
    width: 62%;
    height: 100%;
    position: relative;
    margin: auto;
`;

const animation = keyframes`
  to {
        top: 110%;
`;

export const StarStyle = css`
    background: url("images/star.png");
    background-size: cover;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    top: -200px;
    left: 5px;
    width: 180px;
    height: 180px;
    position: absolute;
    animation: ${animation} 3s linear infinite;
    &:nth-of-type(2n) {
        animation-delay: 1s;
        left: 40%;
    }
    &:nth-of-type(3n) {
        animation-delay: 2s;
        left: 80%;
    }
    & > div {
        position: relative;
        top: 70px;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
    }
`;

export const ButtonStyle = css`
    width: 180px;
    height: 51px;
    background: #FDD207;
    border-radius: 45px;
    border: none;
    margin-left: 10px;
    color: rgba(55, 21, 72, 1);
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 25px;
    position: absolute;
    bottom: 15%;
    right: 3%;
    :hover {
        background: rgba(253, 210, 7, 0.6);
    }
    &:nth-of-type(2n) {
        bottom: 5%;
    }
`;
export const StartButtonStyle = css`
    bottom: 45%;
    right: 45%;
`;

export const InfoBoxStyle = css`
    position: absolute;
    text-align: center;
    & > p, & > div > p {
        color: #FDD207;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 32px;
        -webkit-text-stroke: .05em black;
        margin-top: 0;
    }  
`;

export const TimerStyle = css`
    top: 3%;
    right: 10%;
    width: 70px;
    height:70px;
    @media (max-width: 950px) {
        right: 3%;
    }
`;
export const CounterStyle = css`
    top: 3%;
    right: 3%;
    width: 70px;
    height:70px;
    @media (max-width: 950px) {
    top: 20%;
    }
`;
export const ImgInfoStyle = css`
    
    width:70px; 
    height:70px;
`;

export const TimerImgStyle = css`
    background: url("images/clock.svg");
`;

export const CounterImgStyle = css`
    background: url("images/stars.svg");
`;
