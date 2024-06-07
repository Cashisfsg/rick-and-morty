import { Ticket } from "@/assets/icons";

import styles from "./index.module.css";
import { TicketList } from "@/entities/ticket";
import { formatCurrency } from "@/shared/lib/format-currency";

export const QuestPage = () => {
    return (
        <article className={`${styles["referral-page"]} main-content`}>
            <header className={`${styles.header} `}>
                <p className="text-shadow-blue">
                    {formatCurrency(2238)} <Ticket />
                </p>
                <hgroup>
                    <h1>Hey, Morty, you know what? </h1>
                    <p className="text-blue">You can get even more TICKETS!</p>
                </hgroup>
            </header>

            <TicketList />
        </article>
    );
};
