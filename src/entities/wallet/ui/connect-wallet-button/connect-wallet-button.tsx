import { useEffect } from "react";
import {
    useTonConnectUI,
    CHAIN,
    toUserFriendlyAddress,
    useTonAddress,
} from "@tonconnect/ui-react";

import { useConnectWalletMutation } from "../../api";

import { Account } from "@/assets/icons";

import styles from "./index.module.css";

interface ConnectWalletButtonProps
    extends React.ComponentPropsWithoutRef<"button"> {}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
    className = "",
    ...props
}) => {
    const [tonConnectUi] = useTonConnectUI();
    const [connectWallet] = useConnectWalletMutation();
    const tonAddress = useTonAddress();

    console.log("Ton friendly address: ", tonAddress);

    useEffect(() => {
        const unsubscribe = tonConnectUi.onStatusChange(async (wallet) => {
            if (!wallet) return;

            try {
                console.log(
                    "User friendly address in connect wallet button: ",
                    toUserFriendlyAddress(
                        wallet.account.address,
                        wallet.account.chain === CHAIN.TESTNET
                    )
                );

                await connectWallet({
                    ton_address: wallet.account.address,
                }).unwrap();
            } catch (error) {
                console.error(error);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [tonConnectUi]);

    const onClickHandler: React.MouseEventHandler<
        HTMLButtonElement
    > = async () => {
        try {
            await tonConnectUi.openModal();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button
            type="button"
            onClick={onClickHandler}
            className={`${styles["connect-wallet-button"]} button-green bg-image ${className}`}
            {...props}
        >
            <Account className={`${styles["wallet-icon"]}`} />
            <span>Connect Wallet</span>
        </button>
    );
};
