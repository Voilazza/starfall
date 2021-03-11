import React, {useState, Fragment} from "react";
import {css} from "@emotion/css";
import {SpaceStyle} from "./style/style";
import FallingArea from "./falling-area";
import Timer from "./timer";
import Menu from "./menu";
import Counter from "./counter";

export default function Space() {
    const [isNewGame, setNewGame] = useState(true);
    const [isStarted, setStarted] = useState(false);
    const [score, setScore] = useState(0);

    function start() {
        setStarted(true);
        setNewGame(false);
    }

    function pause() {
        setStarted(s => !s);
    }

    function restart() {
        setStarted(false);
        setNewGame(true);
        setScore(0);
    }

    function addScore(value) {
        setScore(s => s + value);
    }

    return (
        <div
            className={css`${SpaceStyle};`}>
            {!isNewGame &&
            <>
                <Timer
                    newGame={isNewGame}
                    started={isStarted}
                    restart={restart}/>
                <Counter
                    score={score}/>
                <FallingArea
                    started={isStarted}
                    addScore={addScore}/>
            </>}
            <Menu
                start={start}
                restart={restart}
                pause={pause}
                newGame={isNewGame}
                started={isStarted}/>
        </div>
    );
}
