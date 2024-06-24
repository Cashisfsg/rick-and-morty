import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Telegram, X } from "@/assets/icons";
import QR from "@/assets/img/qr-code.png";
import {
    useLazyFetchUserInfoQuery,
    useJoinReferralMutation,
    useUpdatePremiumStatusMutation,
    setUserInitData,
} from "@/entities/user";
import { useAppDispatch } from "@/app/providers/redux/hooks";

import styles from "./index.module.css";
import { TelegramClient } from "@/shared/api/types";

export const LoginPage = () => {
    const tg = (
        window as Window & typeof globalThis & { Telegram: TelegramClient }
    )?.Telegram?.WebApp;

    const initData = tg?.initData;
    const referralId = tg?.initDataUnsafe?.start_param;
    const premium = tg?.initDataUnsafe?.user?.is_premium;

    const dispatch = useAppDispatch();
    const [fetchUserInfo, { data: user }] = useLazyFetchUserInfoQuery();
    const [joinReferral] = useJoinReferralMutation();
    const [updatePremiumStatus] = useUpdatePremiumStatusMutation();

    useEffect(() => {
        (async () => {
            try {
                dispatch(setUserInitData(initData));

                await fetchUserInfo().unwrap();

                if (premium === true) {
                    await updatePremiumStatus({ isPremium: true }).unwrap();
                }

                if (referralId === undefined) return;

                await joinReferral({ id: parseInt(referralId) }).unwrap();
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

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
                <Link
                    to={user?.is_verified ? "/app/welcome" : "/app/verify"}
                    className="bg-image bg-blue"
                >
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
