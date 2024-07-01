import { QuestPopover } from "@/widgets/quest-popover";

import { QuestList } from "@/entities/quest";
import { useFetchUserBalanceQuery } from "@/entities/user";
import { TicketCounter } from "@/entities/ticket";
import { Popover } from "@/shared/ui/popover";

import styles from "./index.module.css";

export const QuestPage = () => {
    const { data: balance } = useFetchUserBalanceQuery();

    return (
        <article className={`${styles["quest-page"]} main-content`}>
            <header className={`${styles.header} `}>
                <TicketCounter size="large">
                    {balance?.tickets || 0}
                </TicketCounter>
                <hgroup>
                    <h1>Hey, Morty, you know what? </h1>
                    <p className="text-blue">You can get even more TICKETS!</p>
                </hgroup>
            </header>

            <Popover.Root>
                <QuestList />

                <Popover.Portal>
                    <QuestPopover />
                </Popover.Portal>
            </Popover.Root>
        </article>
    );
};
