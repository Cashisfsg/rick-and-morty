import { TgChannelPopover } from "@/widgets/tg-channel-popover";
// import { ConnectWalletPopover } from "@/widgets/connect-wallet-popover";

import { ChannelsList, FetchChannels } from "@/entities/channel";

import { Popover } from "@/shared/ui/popover";

import styles from "./index.module.css";

export const WelcomePage = () => {
    return (
        <main
            className={`${styles["welcome-page"]} content-wrapper font-secondary`}
        >
            <hgroup>
                <h1 className="text-blue text-8">Hey, listen up, buddy!</h1>
                <p>
                    To authenticate in this masterpiece, you need to connect
                    your crypto wallet.And subscribe to a couple of channels
                </p>
            </hgroup>

            <Popover.Root>
                <TgChannelPopover />
                <FetchChannels
                    renderSuccess={(channels) => (
                        <ChannelsList channels={channels} />
                    )}
                />
            </Popover.Root>
        </main>
    );
};
