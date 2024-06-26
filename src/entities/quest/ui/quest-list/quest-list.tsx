import { useState } from "react";

import { QuestListItem } from "./quest-list-item";
// import { type Quest } from "../../api";

import styles from "./index.module.css";
import { FetchQuest } from "../fetch";
import { Virtuoso } from "react-virtuoso";

export const QuestList = () => {
    const [page, setPage] = useState(0);
    const limit = 10;

    return (
        <section>
            <FetchQuest
                queryParams={{ page: page, limit: limit }}
                renderSuccess={(quests) => (
                    <Virtuoso
                        data={quests}
                        // components={{
                        //     List: (props) => <List {...props} />,
                        // }}
                        itemContent={(index, quest) => (
                            <QuestListItem key={quest.id} quest={quest} />
                        )}
                        endReached={() =>
                            setPage((previousPage) => previousPage + 1)
                        }
                        totalCount={quests.length}
                        style={{ height: "400px", width: "100%" }}
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
