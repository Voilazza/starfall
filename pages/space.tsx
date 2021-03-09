import React from "react";
import {css} from "@emotion/css";
import {SpaceStyle} from "./style";
import FallingArea from "./falling-area";

function Space() {
    return (
        <div className={css`${SpaceStyle};`}>
            <FallingArea/>
         </div>
    )
}

export default Space