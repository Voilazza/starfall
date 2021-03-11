import React, {useState, useEffect, Fragment} from "react";
import {css} from "@emotion/css";
import {ButtonStyle, StartButtonStyle} from "./style/style";

type MenuProps = {
    start: any,
    pause: any,
    newGame: boolean,
    started: boolean,
    restart: any
}

export default function Menu({start, pause, newGame, started, restart}: MenuProps) {

    return (
        <div>
            {newGame ?
                    <button
                        className={css`${ButtonStyle}; ${StartButtonStyle};`}
                        onClick={start}>
                        Старт
                    </button>:
                <>
                    <button
                        className={css`${ButtonStyle};`}
                        onClick={pause}>
                        {!newGame && !started ? 'Продолжить' : 'Пауза'}
                     </button>
                    <button
                        className={css`${ButtonStyle};`}
                        onClick={restart}>
                        Рестарт
                    </button>
                </>}
        </div>
    );
}