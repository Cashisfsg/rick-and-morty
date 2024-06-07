import { formatCurrency } from "@/shared/lib/format-currency";

import { Ticket } from "@/assets/icons";

import styles from "./index.module.css";

interface TicketCounterProps extends React.ComponentPropsWithoutRef<"span"> {
    size?: "small" | "large";
    children: number;
}

export const TicketCounter: React.FC<TicketCounterProps> = ({
    size = "small",
    className,
    children,
    ...props
}) => {
    return (
        <p
            className={`${styles["ticket-counter"]} ${styles[`ticket-counter-${size}`]} ${className || ""}`}
            {...props}
        >
            <span>{formatCurrency(children)}</span>{" "}
            <Ticket className="svg-shadow-blue" />
        </p>
    );
};
