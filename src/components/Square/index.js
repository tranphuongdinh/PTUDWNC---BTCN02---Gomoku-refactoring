import styles from "./square.module.css";

export default function Square({ square, onClick, isActive }) {
    return (
        <button
            className={`${styles.square} ${isActive ? styles.active : ""}`}
            onClick={onClick}
        >
            {square.value}
        </button>
    );
}
