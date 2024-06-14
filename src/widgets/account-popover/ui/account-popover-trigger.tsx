import { useTonAddress } from "@tonconnect/ui-react";

import { Popover } from "@/shared/ui/popover";

import Avatar from "@/assets/img/avatars/avatar-1.png";

import styles from "./index.module.css";

interface AccountPopoverTriggerProps extends React.ComponentProps<"button"> {}

export const AccountPopoverTrigger: React.FC<AccountPopoverTriggerProps> = ({
    className,
    ...props
}) => {
    const address = useTonAddress();

    return (
        <Popover.Trigger
            className={`button-base button-green ${styles["popover-trigger"]} ${className || ""}`}
            {...props}
        >
            <img src={Avatar} alt="User avatar" />
            <span>
                {address.substring(0, 4)}...
                {address.substring(address.length - 4)}
            </span>{" "}
            • <span className={styles.wallet}>Wallet</span>
        </Popover.Trigger>
    );
};
