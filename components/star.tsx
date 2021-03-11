import React, {useState} from "react";
import {css} from "@emotion/css";
import {StarStyle} from "./style";

type StarProps = {
    started: boolean,
    addScore: any
}

export default function Star({started, addScore}: StarProps) {

    const [left, setLeft] = useState('0%');
    const [value, setValue] = useState(generateValue());

    function generateValue() {
        let value = 0;
        do {
            value = Math.round(Math.random() * 10 - 5);
        } while(value == 0);
        return value;
    }

    function generateRandomLeft() {
        return Math.round(Math.random() * 90) + '%';
    }
    return (
            <div
                className={css`${StarStyle}
                left: ${left}; animation-play-state: ${started ? 'running' : 'paused'}`}
                onAnimationIteration={() => {
                    addScore(value)
                    setValue(generateValue())
                    setLeft(generateRandomLeft())
                }}>
                <div>
                    {value}
                </div>
             </div>
        );
}