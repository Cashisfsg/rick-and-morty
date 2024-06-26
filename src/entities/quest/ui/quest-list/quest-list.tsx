import React, { useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";

import { FetchQuest } from "../fetch";
import { QuestListItem } from "./quest-list-item";
// import { type Quest } from "../../api";

import styles from "./index.module.css";

export const QuestList = () => {
    const [page, setPage] = useState(0);
    const limit = 3;

    return (
        <section>
            <FetchQuest
                queryParams={{ page: page, limit: limit }}
                renderSuccess={(quests) => (
                    <VirtuosoGrid
                        data={quests}
                        // components={{
                        //     List: VirtualList,
                        //     Item: VirtualListItem,
                        // }}
                        itemContent={(index, quest) => (
                            <QuestListItem key={quest.id} quest={quest} />
                        )}
                        endReached={() =>
                            setPage((previousPage) => previousPage + 1)
                        }
                        // initialItemCount={0}
                        totalCount={quests.length}
                        style={{ height: "357px", width: "100%" }}
                        className="hide-scrollbar"
                    />
                )}
            />
        </section>
    );
};

export const VirtualList = React.forwardRef<
    HTMLUListElement,
    React.LiHTMLAttributes<HTMLUListElement>
>((props, forwardRef) => {
    return <ul {...props} className={styles["quest-list"]} ref={forwardRef} />;
});

interface VirtualListItemProps extends React.ComponentPropsWithoutRef<"li"> {}

export const VirtualListItem: React.FC<VirtualListItemProps> = ({
    ...props
}) => {
    return <li {...props} />;
};
