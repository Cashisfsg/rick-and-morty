import { useEffect } from "react";

import {
    // useTonConnectUI,
    useTonWallet,
    toUserFriendlyAddress,
    CHAIN,
    // useTonAddress,
    // useTonConnectUI,
} from "@tonconnect/ui-react";

import {
    // AccountPopoverProvider,
    AccountPopoverTrigger,
    AccountPopover,
} from "@/widgets/account-popover";

import {
    ConnectWalletButton,
    useConnectWalletMutation,
} from "@/entities/wallet";
import { useStateSelector } from "@/app/providers/redux/hooks";
import { useFetchUserBalanceQuery } from "@/entities/user";
import { TicketCounter } from "@/entities/ticket";

import { Popover } from "@/shared/ui/popover";
import { Button } from "@/shared/ui/button";
import { formatCurrency } from "@/shared/lib/format-currency";

import { Token } from "@/assets/icons";

import styles from "./index.module.css";

export const AccountPage = () => {
    const wallet = useTonWallet();
    const user = useStateSelector((state) => state.user.user);
    const { data: balance } = useFetchUserBalanceQuery();
    const [connectWallet] = useConnectWalletMutation();

    useEffect(() => {
        if (!wallet) return;

        const userFriendlyWalletAddress = toUserFriendlyAddress(
            wallet.account.address,
            wallet.account.chain === CHAIN.TESTNET
        );

        if (user?.wallet?.address === userFriendlyWalletAddress) return;

        (async () => {
            try {
                await connectWallet({
                    ton_address: userFriendlyWalletAddress,
                }).unwrap();
            } catch (error) {
                console.error(error);
            }
        })();
    }, [wallet, user?.wallet]);

    // const [connectWallet] = useConnectWalletMutation();
    // const tonAddress = useTonAddress();
    // const [tonConnectUi] = useTonConnectUI();

    // console.log("Ton friendly address: ", tonAddress);

    // useEffect(() => {
    //     const unsubscribe = tonConnectUi.onStatusChange(async (wallet) => {
    //         if (!wallet) return;

    //         try {
    //             const userFriendlyAddress = toUserFriendlyAddress(
    //                 wallet.account.address,
    //                 wallet.account.chain === CHAIN.TESTNET
    //             );

    //             console.log(
    //                 "User friendly address in connect wallet button: ",
    //                 userFriendlyAddress
    //             );

    //             await connectWallet({
    //                 ton_address: userFriendlyAddress,
    //             }).unwrap();
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     });
    //     return () => {
    //         unsubscribe();
    //     };
    // }, [tonConnectUi]);

    return (
        <article className={`main-content w-full ${styles["account-page"]}`}>
            <header>
                {wallet ? (
                    <Popover.Root>
                        <AccountPopoverTrigger />
                        <Popover.Portal>
                            <AccountPopover />
                        </Popover.Portal>
                    </Popover.Root>
                ) : (
                    <ConnectWalletButton />
                )}
                <TicketCounter>{balance?.tickets || 0}</TicketCounter>
            </header>

            <h1 className="font-secondary">
                <p
                    // className={`${wallet ? "text-pink text-shadow-pink" : "text-gray"} ${styles["coin-counter"]}`}
                    className={`text-gray ${styles["coin-counter"]}`}
                >
                    <span>{formatCurrency(balance?.balance || 0)}</span>
                    <Token
                    // className={wallet ? "svg-shadow-pink" : ""}
                    />
                </p>

                <p className={styles["balance-controls"]}>
                    <Button className="button-pink" disabled={true}>
                        Top Up
                    </Button>
                    <Button className="button-pink" disabled={true}>
                        Withdraw
                    </Button>
                </p>
            </h1>

            <section>
                <h2 className="text-start">Transaction history</h2>
                <p className={styles["empty-list"]}>
                    No completed transactions yet
                </p>
            </section>
        </article>
    );
};
