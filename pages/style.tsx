import {css, keyframes} from "@emotion/react";
import {injectGlobal} from "@emotion/css";

injectGlobal`
    body, html {
        height: 100%;
        margin: 0;
        overflow: hidden;
    }
`;

export const SpaceStyle = css`
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("background.png");
    background-size: cover;
    overflow: hidden;
    margin: 0;
`;

export const FallingAreaStyle = css`
    width: 60%;
    height: 100%;
    position: relative;
    margin: auto;
`;

const animation = keyframes`
  to {
        top: 110%;
`;

export const StarStyle = css`
    background: url("star.png");
    background-size: cover;
    top: -100px;
    left: 5px;
    width: 88px;
    height: 88px;
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
        top: 30px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
`;
