import { QuestListItem } from "./quest-list-item";

import styles from "./index.module.css";

export const QuestList = () => {
    return (
        <section>
            <ul className={styles["quest-list"]}>
                {Array(10)
                    .fill(0)
                    .map((_, index) => (
                        <QuestListItem
                            key={index}
                            quest={{
                                amount: 1.1,
                                text: "Join our telegram channel",
                                completed: true,
                            }}
                        />
                    ))}
            </ul>
        </section>
    );
};
