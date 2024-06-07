import { ChannelsList } from "@/entities/channel";
import { ConnectWalletPopover } from "@/widgets/connect-wallet-popover";

import styles from "./index.module.css";

export const AccountPage = () => {
    return (
        <article
            className={`${styles["account-page"]} main-content font-secondary`}
        >
            <hgroup>
                <h1 className=" text-blue text-8">Hey, listen up, buddy!</h1>
                <p>
                    To authenticate in this masterpiece, you need to connect
                    your crypto wallet.And subscribe to a couple of channels
                </p>
            </hgroup>

            <ConnectWalletPopover />

            <ChannelsList />
        </article>
    );
};
