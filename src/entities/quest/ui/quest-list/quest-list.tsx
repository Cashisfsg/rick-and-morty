import { useState, forwardRef } from "react";
import { VirtuosoGrid } from "react-virtuoso";

import { FetchQuest } from "../fetch";
import { QuestListItem } from "./quest-list-item";
// import { type Quest } from "../../api";

import styles from "./index.module.css";

export const QuestList = () => {
    const [page, setPage] = useState(0);
    const limit = 10;

    return (
        <section>
            <FetchQuest
                queryParams={{ page: page, limit: limit }}
                renderSuccess={(quests) => (
                    <VirtuosoGrid
                        data={quests}
                        components={{
                            List: forwardRef((props, ref) => (
                                <List ref={ref} {...props} />
                            )),
                            Item: (props) => <li {...props} />,
                        }}
                        itemContent={(index, quest) => (
                            <QuestListItem key={quest.id} quest={quest} />
                        )}
                        endReached={() =>
                            setPage((previousPage) => previousPage + 1)
                        }
                        totalCount={quests.length}
                        // style={{ height: "400px", width: "100%" }}
                        className={styles["quest-list"]}
                    />
                )}
            />
        </section>
    );
};

interface ListProps extends React.ComponentProps<"ul"> {}

export const List: React.FC<ListProps> = ({ className = "", ...props }) => {
    return <ul className={`${styles["quest-list"]} ${className}`} {...props} />;
};
