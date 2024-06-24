import {
    // useTonConnectUI,
    useTonWallet,
} from "@tonconnect/ui-react";

import {
    AccountPopoverProvider,
    AccountPopoverTrigger,
    AccountPopover,
} from "@/widgets/account-popover";

import { ConnectWalletButton } from "@/entities/wallet";
import { useFetchUserInfoQuery } from "@/entities/user";
import { TicketCounter } from "@/entities/ticket";

import { Popover } from "@/shared/ui/popover";
import { Button } from "@/shared/ui/button";
import { formatCurrency } from "@/shared/lib/format-currency";

import { Token } from "@/assets/icons";

import styles from "./index.module.css";

export const AccountPage = () => {
    const wallet = useTonWallet();
    const { data: user } = useFetchUserInfoQuery();

    console.log(wallet);

    // const [tonConnectUI] = useTonConnectUI();

    // tonConnectUI.openSingleWalletModal();

    return (
        <article className={`main-content w-full ${styles["account-page"]}`}>
            <header>
                {wallet ? (
                    <Popover.Root>
                        <AccountPopoverProvider>
                            <AccountPopoverTrigger />
                            <Popover.Portal>
                                <AccountPopover />
                            </Popover.Portal>
                        </AccountPopoverProvider>
                    </Popover.Root>
                ) : (
                    <ConnectWalletButton />
                )}
                <TicketCounter>{user?.balance || 0}</TicketCounter>
            </header>

            <h1 className="font-secondary">
                <p
                    className={`${wallet ? "text-pink text-shadow-pink" : "text-gray"} ${styles["coin-counter"]}`}
                >
                    <span>{formatCurrency(user?.balance || 0)}</span>
                    <Token className={wallet ? "svg-shadow-pink" : undefined} />
                </p>

                <p className={styles["balance-controls"]}>
                    <Button className="button-pink" disabled={!wallet}>
                        Top Up
                    </Button>
                    <Button className="button-pink" disabled={!wallet}>
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
