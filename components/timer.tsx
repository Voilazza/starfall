import React, {useState, useEffect, Fragment} from "react";
import {css} from "@emotion/css";
import {InfoBoxStyle, TimerStyle, ImgInfoStyle, TimerImgStyle} from "./style/style";

type TimerProps = {
    restart: any,
    started: boolean,
    newGame: boolean
}
export default function Timer({restart, started}: TimerProps) {
    const [direction, setDirection] = useState(true);
    const [counter, setCounter] = useState(direction ? 60 : 0);

    const padTime = time => {
        return String(time).length === 1 ? `0${time}` : `${time}`;
    };

    const format = time => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${padTime(seconds)}`;
    };

    useEffect(() => {
        let timer;
        if (started && direction && counter > 0) {
            timer = setTimeout(() => setCounter(c => c - 1), 1000);
        } else if (started && !direction && counter < 60) {
            timer = setTimeout(() => setCounter(c => c + 1), 1000);
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [counter, started]);

    return (

        <>
            {counter === (direction ? 0 : 60) ? restart() :
                <div className={css`${InfoBoxStyle}; ${TimerStyle};`}>
                    <div className={css`${ImgInfoStyle}; ${TimerImgStyle}`}/>
                    <p>{format(counter)} </p>
                </div>
            }
        </>
    );
}