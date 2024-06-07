import { Popover } from "@/shared/ui/popover";

import { Account } from "@/assets/icons";

import styles from "./index.module.css";

interface ConnectWalletButtonProps
    extends React.ComponentPropsWithoutRef<"button"> {}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
    className,
    ...props
}) => {
    return (
        <Popover.Trigger
            type="button"
            className={`${styles["connect-wallet-button"]} button-green bg-image ${className || ""}`}
            {...props}
        >
            <Account className={`${styles["wallet-icon"]}`} />
            <span>Connect Wallet</span>
        </Popover.Trigger>
    );
};
