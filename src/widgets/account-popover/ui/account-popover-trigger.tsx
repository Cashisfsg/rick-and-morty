import { useTonAddress } from "@tonconnect/ui-react";

import { useAccountPopoverContext } from "./use-account-popover-context";
import { Popover } from "@/shared/ui/popover";

import styles from "./index.module.css";

interface AccountPopoverTriggerProps extends React.ComponentProps<"button"> {}

export const AccountPopoverTrigger: React.FC<AccountPopoverTriggerProps> = ({
    className = "",
    ...props
}) => {
    const address = useTonAddress();
    const { avatarImage } = useAccountPopoverContext();

    return (
        <Popover.Trigger
            className={`button-base button-green bg-image ${styles["popover-trigger"]} ${className}`}
            {...props}
        >
            <img src={avatarImage} alt="User avatar" />
            <span>
                {address.substring(0, 4)}...
                {address.substring(address.length - 4)}
            </span>{" "}
            • <span className={styles.wallet}>Wallet</span>
        </Popover.Trigger>
    );
};
