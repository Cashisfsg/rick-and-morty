import { Link } from "react-router-dom";

import { Telegram, X } from "@/assets/icons";
import QR from "@/assets/img/qr-code.png";

import styles from "./index.module.css";

export const LoginPage = () => {
    return (
        <main className={`${styles["login-page"]}`}>
            <h1 className="text-blue">
                Hey, genius! This app is best experienced on your phone. Yeah,
                your phone!
            </h1>
            <figure>
                <img src={QR} alt="QR code" />
                <figcaption>@tgbotname_bot</figcaption>
            </figure>
            <footer>
                <Link to="/app" className="bg-image bg-blue">
                    <Telegram />
                    Telegram
                </Link>
                <Link to="/" className="bg-image bg-blue">
                    <X />X
                </Link>
            </footer>
        </main>
    );
};
