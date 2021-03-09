import React from "react";
import Star from "./star";
import {css} from "@emotion/css";
import {FallingAreaStyle} from "./style";

function FallingArea() {
    const stars = ['star1', 'star2', 'star3'];

    return (
        <div
            className={css`${FallingAreaStyle};`}>
                {stars.map(el =>
                    <Star key={el}/>
                )}
        </div>
    )
}

export default FallingArea
