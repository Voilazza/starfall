import {useState} from "react";
import {css} from "@emotion/css";
import {InfoBoxStyle, CounterStyle, ImgInfoStyle, CounterImgStyle} from "./style";

type CounterProps = {
    score: number
}

export default function Counter({score}: CounterProps) {

    return (
        <div
            className={css`${InfoBoxStyle}; ${CounterStyle}`}>
            <div className={css`${ImgInfoStyle}; ${CounterImgStyle}`}/>
            <p>  {score}</p>
        </div>
    );
}