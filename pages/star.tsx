import React, {useState} from "react";
import {css} from "@emotion/css";
import {StarStyle} from "./style";

function Star() {

    const [left, setLeft] = useState('0%');
    const [value, setValue] = useState(generateValue());

    function generateValue() {
        return Math.round(Math.random() * 30 - 15);
    }

    function generateRandomLeft() {
        return Math.round(Math.random() * 90) + '%';
    }

    return (
            <div
                className={css`${StarStyle}
                left: ${left}`} onAnimationIteration={() => {
                    setValue(generateValue())
                    setLeft(generateRandomLeft())
                }} >
                <div>{value}</div>
             </div>
        )
}

export default Star
