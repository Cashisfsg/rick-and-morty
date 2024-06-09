import { QuestPopover } from "@/widgets/quest-popover";

import { QuestList } from "@/entities/quest";
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
                <QuestList />
                <QuestPopover />
            </Popover.Root>
        </article>
    );
};
