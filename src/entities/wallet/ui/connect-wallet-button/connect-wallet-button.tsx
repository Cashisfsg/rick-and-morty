// import { Popover } from "@/shared/ui/popover";
import { useTonConnectUI } from "@tonconnect/ui-react";

import { Account } from "@/assets/icons";

import styles from "./index.module.css";

interface ConnectWalletButtonProps
    extends React.ComponentPropsWithoutRef<"button"> {}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
    className,
    ...props
}) => {
    const [tonConnectUi] = useTonConnectUI();

    return (
        <button
            type="button"
            onClick={() => tonConnectUi.openModal()}
            className={`${styles["connect-wallet-button"]} button-green bg-image ${className || ""}`}
            {...props}
        >
            <Account className={`${styles["wallet-icon"]}`} />
            <span>Connect Wallet</span>
        </button>
    );
};
