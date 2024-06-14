import { useTonWallet } from "@tonconnect/ui-react";

import {
    AccountPopoverTrigger,
    AccountPopover,
} from "@/widgets/account-popover";

import { ConnectWalletButton } from "@/entities/wallet";
import { TicketCounter } from "@/entities/ticket";

import { Popover } from "@/shared/ui/popover";
import { Button } from "@/shared/ui/button";

import { Token } from "@/assets/icons";

// import Avatar from "@/assets/img/avatars/avatar-1.png";
import styles from "./index.module.css";

export const AccountPage = () => {
    const wallet = useTonWallet();

    return (
        <article className={`${styles["account-page"]} main-content w-full`}>
            <header
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {!wallet ? (
                    <Popover.Root>
                        <AccountPopoverTrigger />
                        <Popover.Portal>
                            <AccountPopover />
                        </Popover.Portal>
                    </Popover.Root>
                ) : (
                    // <button
                    //     className="button-base button-green"
                    //     style={{
                    //         display: "flex",
                    //         alignItems: "center",
                    //         justifyContent: "center",
                    //         columnGap: "0.5rem",
                    //         padding: "0.5rem",
                    //         fontSize: "0.875rem",
                    //         // lineClamp: 1.2,
                    //     }}
                    // >
                    //     <img
                    //         src={Avatar}
                    //         alt="User avatar"
                    //         height={24}
                    //         width={24}
                    //         style={{ borderRadius: "50%" }}
                    //     />
                    //     <span style={{ marginInlineStart: "0.5rem" }}>
                    //         {address.substring(0, 4)}...
                    //         {address.substring(address.length - 4)}
                    //     </span>{" "}
                    //     • <span style={{ color: "#8EAE99" }}>Wallet</span>
                    // </button>
                    <ConnectWalletButton />
                )}
                {/* <TonConnectButton /> */}
                <TicketCounter>{2238}</TicketCounter>
            </header>

            <h1 className="font-secondary">
                <p
                    className="text-pink text-shadow-pink"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        columnGap: "0.25rem",
                    }}
                >
                    <span style={{ fontSize: "3.5rem" }}>2 238</span>
                    <Token
                        className="svg-shadow-pink"
                        style={{ fontSize: "2.5rem" }}
                    />
                </p>
                <p
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        columnGap: "1rem",
                        marginBlockStart: "1.5rem",
                    }}
                >
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
                <p
                    style={{
                        fontSize: "22px",
                        color: "var(--green-green)",
                        marginBlockStart: "2.5rem",
                    }}
                >
                    No completed transactions yet
                </p>
            </section>
        </article>
    );
};
