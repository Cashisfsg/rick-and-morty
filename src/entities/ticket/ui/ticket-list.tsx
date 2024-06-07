import { TicketListItem } from "./ticket-list-item";

import styles from "./index.module.css";

export const TicketList = () => {
    return (
        <section>
            <ul className={styles["ticket-list"]}>
                <TicketListItem
                    ticket={{
                        amount: 1.1,
                        text: "Join our telegram channel",
                        completed: true,
                    }}
                />
                <TicketListItem
                    ticket={{
                        amount: 1.1,
                        text: "Join our telegram channel",
                        completed: true,
                    }}
                />
                <TicketListItem
                    ticket={{
                        amount: 1.1,
                        text: "Join our telegram channel",
                        completed: true,
                    }}
                />
                <TicketListItem
                    ticket={{
                        amount: 1.1,
                        text: "Join our telegram channel",
                        completed: true,
                    }}
                />
                <TicketListItem
                    ticket={{
                        amount: 1.1,
                        text: "Join our telegram channel",
                        completed: true,
                    }}
                />
            </ul>
        </section>
    );
};
