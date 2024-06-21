import { QuestPopover } from "@/widgets/quest-popover";

import { FetchQuest, QuestList } from "@/entities/quest";
import { TicketCounter } from "@/entities/ticket";
import { Popover } from "@/shared/ui/popover";

import styles from "./index.module.css";

export const QuestPage = () => {
    return (
        <article className={`${styles["referral-page"]} main-content`}>
            <header className={`${styles.header} `}>
                <TicketCounter size="large">{2238}</TicketCounter>
                <hgroup>
                    <h1>Hey, Morty, you know what? </h1>
                    <p className="text-blue">You can get even more TICKETS!</p>
                </hgroup>
            </header>

            <Popover.Root>
                <FetchQuest
                    params={{ page: 0, limit: 10 }}
                    renderSuccess={(quests) => (
                        <>
                            {quests.length !== 0 ? (
                                <QuestList quests={quests} />
                            ) : (
                                <p className="text-green-secondary text-5.5">
                                    No available quests
                                </p>
                            )}
                        </>
                    )}
                />
                <Popover.Portal>
                    <QuestPopover />
                </Popover.Portal>
            </Popover.Root>
        </article>
    );
};
