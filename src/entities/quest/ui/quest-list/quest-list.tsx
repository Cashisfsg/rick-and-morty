import { QuestListItem } from "./quest-list-item";
import { type QuestListResponse } from "../../api";

import styles from "./index.module.css";

interface QuestListProps {
    quests: QuestListResponse;
}

export const QuestList: React.FC<QuestListProps> = ({ quests }) => {
    return (
        <section>
            <ul className={styles["quest-list"]}>
                {quests.map((quest) => (
                    <QuestListItem key={quest.id} quest={quest} />
                ))}
            </ul>
        </section>
    );
};
