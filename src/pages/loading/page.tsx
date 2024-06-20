import { Loader } from "@/shared/ui/loader";

import styles from "./index.module.css";

export const LoadingPage = () => {
    return (
        <main className={`content-wrapper ${styles["loading-page"]}`}>
            <Loader />
        </main>
    );
};
