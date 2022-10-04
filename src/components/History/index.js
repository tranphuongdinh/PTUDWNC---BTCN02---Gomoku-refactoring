import React from "react";
import styles from "./history.module.css";

export default function History({ history, isAscMoves, jumpTo, stepNumber }) {
    return (
        <div className={styles.gameHistory}>
            <ul className={styles.historyList}>
                {history
                    .sort((h1, h2) =>
                        isAscMoves ? h1.step - h2.step : h2.step - h1.step
                    )
                    .map((his, index) => {
                        const desc = his.step
                            ? "Go to move " +
                              `#${his.step}` +
                              ` (${his.activeCol}, ${his.activeRow})`
                            : "Go to game start";

                        return (
                            <li key={his.step}>
                                <button
                                    onClick={() => jumpTo(his.step)}
                                    className={
                                        styles.historyStep +
                                        (stepNumber === his.step
                                            ? " active"
                                            : "")
                                    }
                                >
                                    {desc}
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
