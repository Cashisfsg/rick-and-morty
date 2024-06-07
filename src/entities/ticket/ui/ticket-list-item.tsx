import { Telegram, Referral, Ticket, ChevronRight, Done } from "@/assets/icons";

import styles from "./index.module.css";

interface Ticket {
    amount: number;
    text: string;
    completed: boolean;
}

interface TicketListItemProps extends React.ComponentPropsWithoutRef<"li"> {
    ticket: Ticket;
}

export const TicketListItem: React.FC<TicketListItemProps> = ({
    ticket,
    ...props
}) => {
    return (
        <li
            className={`${styles.ticket}  bg-green border-green shadow-green`}
            {...props}
        >
            <Telegram className="border-green shadow-green" />
            <p>{ticket?.text}</p>
            <ChevronRight />
            <span className="text-shadow-blue">
                +{ticket?.amount}k
                <Ticket />
            </span>
        </li>
    );
};
