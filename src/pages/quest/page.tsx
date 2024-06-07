import { TicketList, TicketCounter } from "@/entities/ticket";
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

            <TicketList />
        </article>
    );
};
