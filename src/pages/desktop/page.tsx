import { TelegramClient } from "@/shared/api/types";

import QR from "@/assets/img/qr-code.png";
import { Telegram, X } from "@/assets/icons";

import styles from "./index.module.css";

export const DesktopPage = () => {
    const tg = (
        window as Window & typeof globalThis & { Telegram: TelegramClient }
    )?.Telegram?.WebApp;

    const onClickHandler = (url: string) => {
        tg?.openLink(url);
    };

    return (
        <main className={`${styles["login-page"]} content-wrapper`}>
            <h1 className="text-blue">
                Hey, genius! This app is best experienced on your phone. Yeah,
                your phone!
            </h1>
            <figure>
                <img src={QR} alt="QR code" height="210" width="210" />
                <figcaption>@{import.meta.env.VITE_BOT_NAME}</figcaption>
            </figure>
            <footer>
                <button
                    onClick={() => onClickHandler("https://telegram.org")}
                    className="bg-image bg-blue"
                >
                    <Telegram className="svg-shadow-blue" />
                    Telegram
                </button>
                <button
                    onClick={() => onClickHandler("https://x.com")}
                    className="bg-image bg-blue"
                >
                    <X className="svg-shadow-blue" />X
                </button>
            </footer>
        </main>
    );
};
