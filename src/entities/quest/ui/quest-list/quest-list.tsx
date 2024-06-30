import React, { useState } from "react";
import { Virtuoso } from "react-virtuoso";

import { FetchQuest } from "../fetch";
import { QuestListItem } from "./quest-list-item";
// import { type Quest } from "../../api";

import styles from "./index.module.css";
import { Loader } from "@/shared/ui/loader";

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
                        components={{
                            List: VirtualList,
                            Item: VirtualListItem,
                        }}
                        itemContent={(index, quest) => (
                            <QuestListItem
                                key={quest.id}
                                quest={quest}
                                index={index}
                                limit={limit}
                            />
                        )}
                        endReached={() =>
                            setPage(Math.ceil(quests.length / limit))
                        }
                        // initialItemCount={0}
                        totalCount={quests.length}
                        // style={{ height: "357px", width: "100%" }}
                        className={`hide-scrollbar ${styles["virtual-list"]}`}
                    />
                )}
                loadingFallback={
                    <div className={styles.loader}>
                        <Loader />
                    </div>
                }
            />
        </section>
    );
};

const VirtualList = React.forwardRef<
    HTMLUListElement,
    React.LiHTMLAttributes<HTMLUListElement>
>((props, forwardRef) => {
    return <ul {...props} className={styles["quest-list"]} ref={forwardRef} />;
});

interface VirtualListItemProps extends React.ComponentPropsWithoutRef<"li"> {}

const VirtualListItem: React.FC<VirtualListItemProps> = ({ ...props }) => {
    return <li {...props} />;
};
