import { Link } from "react-router-dom";

import { Telegram, X } from "@/assets/icons";
import QR from "@/assets/img/qr-code.png";
import { useFetchUserInfoQuery } from "@/entities/user";

import styles from "./index.module.css";

export const LoginPage = () => {
    const { data } = useFetchUserInfoQuery();

    console.log(data);

    return (
        <main className={`${styles["login-page"]} content-wrapper`}>
            <h1 className="text-blue">
                Hey, genius! This app is best experienced on your phone. Yeah,
                your phone!
            </h1>
            <figure>
                <img src={QR} alt="QR code" height="210" width="210" />
                <figcaption>@tgbotname_bot</figcaption>
            </figure>
            <footer>
                <Link to="/app/verify" className="bg-image bg-blue">
                    <Telegram className="svg-shadow-blue" />
                    Telegram
                </Link>
                <Link to="/" className="bg-image bg-blue">
                    <X className="svg-shadow-blue" />X
                </Link>
            </footer>
        </main>
    );
};
