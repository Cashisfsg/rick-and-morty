import { ChevronRight } from "@/assets/icons";

import styles from "./index.module.css";

export const ChannelsList = () => {
    return (
        <article>
            <h2 className="text-start">Channels</h2>
            <ul className={styles["channel-list"]}>
                <li
                    className={`${styles["channel-list-item"]} bg-green border-green shadow-green rounded-xl`}
                >
                    <img
                        src=""
                        alt=""
                        className={`${styles["channel-logo"]} rounded-full`}
                    />
                    <span className={`${styles["channel-name"]} text-start `}>
                        Name TG Channel
                    </span>
                    <ChevronRight />
                </li>

                <li
                    className={`${styles["channel-list-item"]} bg-green border-green shadow-green rounded-xl`}
                >
                    <img
                        src=""
                        alt=""
                        className={`${styles["channel-logo"]} rounded-full`}
                    />
                    <span className={`${styles["channel-name"]} text-start `}>
                        Name TG Channel
                    </span>
                    <ChevronRight />
                </li>

                <li
                    className={`${styles["channel-list-item"]} bg-green border-green shadow-green rounded-xl`}
                >
                    <img
                        src=""
                        alt=""
                        className={`${styles["channel-logo"]} rounded-full`}
                    />
                    <span className={`${styles["channel-name"]} text-start `}>
                        Name TG Channel
                    </span>
                    <ChevronRight />
                </li>

                <li
                    className={`${styles["channel-list-item"]} bg-green border-green shadow-green rounded-xl`}
                >
                    <img
                        src=""
                        alt=""
                        className={`${styles["channel-logo"]} rounded-full`}
                    />
                    <span className={`${styles["channel-name"]} text-start `}>
                        Name TG Channel
                    </span>
                    <ChevronRight />
                </li>

                <li
                    className={`${styles["channel-list-item"]} bg-green border-green shadow-green rounded-xl`}
                >
                    <img
                        src=""
                        alt=""
                        className={`${styles["channel-logo"]} rounded-full`}
                    />
                    <span className={`${styles["channel-name"]} text-start `}>
                        Name TG Channel
                    </span>
                    <ChevronRight />
                </li>

                <li
                    className={`${styles["channel-list-item"]} bg-green border-green shadow-green rounded-xl`}
                >
                    <img
                        src=""
                        alt=""
                        className={`${styles["channel-logo"]} rounded-full`}
                    />
                    <span className={`${styles["channel-name"]} text-start `}>
                        Name TG Channel
                    </span>
                    <ChevronRight />
                </li>
            </ul>
        </article>
    );
};
