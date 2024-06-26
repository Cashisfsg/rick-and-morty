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
                            List: forwardRef(({ children, ...props }, ref) => (
                                <List ref={ref} {...props}>
                                    {children}
                                </List>
                            )),
                            Item: ({ children, ...props }) => (
                                <div role="listitem" {...props}>
                                    {children}
                                </div>
                            ),
                        }}
                        itemContent={(index, quest) => (
                            <QuestListItem key={quest.id} quest={quest} />
                        )}
                        // endReached={() =>
                        //     setPage((previousPage) => previousPage + 1)
                        // }
                        totalCount={quests.length}
                        style={{ height: "357px", width: "100%" }}
                    />
                )}
            />
        </section>
    );
};

interface ListProps extends React.ComponentProps<"div"> {}

export const List: React.FC<ListProps> = ({ className = "", ...props }) => {
    return (
        <div
            role="listbox"
            className={`${styles["quest-list"]} ${className}`}
            {...props}
        />
    );
};
