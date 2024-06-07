import { Button } from "@/shared/ui/button";
import { Popover } from "@/shared/ui/popover";

import { Cross, Ton } from "@/assets/icons";
import TonHub from "@/assets/img/wallets/ton-hub.png";
import DeWallet from "@/assets/img/wallets/de-wallet.png";
import TonKeeper from "@/assets/img/wallets/ton-keeper.png";
import MyTonWallet from "@/assets/img/wallets/my-ton-wallet.png";

import styles from "./index.module.css";
import { ScanQRButton } from "@/features/user/scan-qr-code";

const wallets = [
    {
        img: TonHub,
        name: "TonHub",
    },
    {
        img: DeWallet,
        name: "DeWallet",
    },
    {
        img: TonKeeper,
        name: "Tonkeeper",
    },
    {
        img: MyTonWallet,
        name: "MyTonWallet",
    },
];

export const ConnectWalletPopover = () => {
    return (
        <Popover.Root>
            <Popover.Trigger className="button-base button-blue bg-image">
                Connect Wallet
            </Popover.Trigger>
            <Popover.Content
                as="section"
                className={`${styles["popover-wallet"]}`}
            >
                <header>
                    <ScanQRButton />
                    <Popover.Close>
                        <Cross />
                    </Popover.Close>
                </header>

                <hgroup>
                    <h2>Connect your wallet</h2>
                    <p>
                        Open Wallet in Telegram or select your wallet to connect
                    </p>
                </hgroup>

                <Button className="bg-image button-blue">
                    Open Wallet in Telegram
                </Button>

                <ul>
                    {wallets.map((wallet) => (
                        <li key={wallet.name}>
                            <img src={wallet.img} alt="" />
                            <p>{wallet.name}</p>
                        </li>
                    ))}
                </ul>

                <footer>
                    <Ton />
                    <span>TON Connect</span>
                </footer>
            </Popover.Content>
        </Popover.Root>
    );
};
