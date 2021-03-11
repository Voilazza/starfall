import React from "react";
import Star from "./star";
import {css} from "@emotion/css";
import {FallingAreaStyle} from "./style";

type FallingAreaProps = {
    started: any,
    addScore: any
}
export default function FallingArea({started, addScore}: FallingAreaProps) {
    const stars = ['star1', 'star2', 'star3'];

    return (
        <div
            className={css`${FallingAreaStyle};`}>
                {stars.map(el =>
                    <Star
                        key={el}
                        started={started}
                        addScore={addScore}/>
                )}
        </div>
    );
}