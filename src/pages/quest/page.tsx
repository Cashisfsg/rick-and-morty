import { useState } from "react";
import { QuestPopover } from "@/widgets/quest-popover";

import { FetchQuest, QuestList } from "@/entities/quest";
import { useFetchUserInfoQuery } from "@/entities/user";
import { TicketCounter } from "@/entities/ticket";
import { Popover } from "@/shared/ui/popover";

import { DynamicList } from "@/shared/ui/dynamic-list/dynamic-list";

import styles from "./index.module.css";
import { QuestListItem } from "@/entities/quest/ui/quest-list/quest-list-item";

function hasNextPage(page: number, limit: number, itemCount: number): boolean {
    console.log("Page: " + page);
    console.log("Limit: " + limit);
    console.log("Items count: " + itemCount);
    console.log(
        "Fetch next page condition: ",
        (page + 1) * limit === itemCount
    );
    return itemCount === (page + 1) * limit;
}

export const QuestPage = () => {
    const [page, setPage] = useState(0);
    const limit = 3;
    const { data: user } = useFetchUserInfoQuery();

    return (
        <article className={`${styles["referral-page"]} main-content`}>
            <header className={`${styles.header} `}>
                <TicketCounter size="large">{user?.balance || 0}</TicketCounter>
                <hgroup>
                    <h1>Hey, Morty, you know what? </h1>
                    <p className="text-blue">You can get even more TICKETS!</p>
                </hgroup>
            </header>

            <Popover.Root>
                <FetchQuest
                    queryParams={{ page: page, limit: limit }}
                    renderSuccess={(
                        quests,
                        isLoading,
                        isFetching,
                        isSuccess
                    ) => {
                        return (
                            <>
                                {/* {quests.length !== 0 ? ( */}
                                <DynamicList
                                    hasNextPage={hasNextPage(
                                        page,
                                        limit,
                                        quests.length
                                    )}
                                    isNextPageLoading={isFetching}
                                    isSuccess={isSuccess}
                                    items={quests}
                                    loadNextPage={() => {
                                        setPage(
                                            (previousPage) => previousPage + 1
                                        );
                                    }}
                                >
                                    {({ index }) => (
                                        <QuestListItem quest={quests[index]} />
                                    )}
                                </DynamicList>
                                {/* // ) : (
                                //     <p className="text-green-secondary text-5.5">
                                //         No available quests
                                //     </p>
                                // )} */}
                            </>
                        );
                    }}
                />

                <Popover.Portal>
                    <QuestPopover />
                </Popover.Portal>
            </Popover.Root>
        </article>
    );
};
