import React from "react";
import styles from "./gameInfo.module.css";

export default function GameInfo({
    setSize,
    isAscMoves,
    setIsAscMoves,
    status,
    createNewGame,
    isEndGame,
}) {
    return (
        <div className={styles.gameInfo}>
            <div className={styles.status}>{status}</div>
            {isEndGame && (
                <button
                    className={styles.newGameButton}
                    onClick={createNewGame}
                >
                    NEW GAME
                </button>
            )}
            <div>
                Board size:{" "}
                <select
                    name="size"
                    onChange={(e) => {
                        setSize(+e.target.value);
                    }}
                >
                    <option value="3">3</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button
                onClick={() => {
                    setIsAscMoves(!isAscMoves);
                }}
                className={styles.sortButton}
            >
                Sort history by step: {isAscMoves ? "Ascending" : "Descending"}
            </button>
        </div>
    );
}
