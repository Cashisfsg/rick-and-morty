import styles from "./index.module.css";

export const Loader = () => {
    return (
        <>
            <div className={styles["loading-bar-text"]}>
                <span>/</span>
                <span>/</span>
                <span>L</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
            <div className={styles["loading-bar"]}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </>
    );
};
