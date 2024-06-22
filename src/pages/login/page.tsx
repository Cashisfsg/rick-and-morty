import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Telegram, X } from "@/assets/icons";
import QR from "@/assets/img/qr-code.png";
import {
    useLazyFetchUserInfoQuery,
    useJoinReferralMutation,
    setUserInitData,
} from "@/entities/user";
import { useAppDispatch } from "@/app/providers/redux/hooks";

import styles from "./index.module.css";
import { TelegramClient } from "@/shared/api/types";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { useConnectWalletMutation } from "@/entities/wallet";

export const LoginPage = () => {
    const tg = (
        window as Window & typeof globalThis & { Telegram: TelegramClient }
    )?.Telegram?.WebApp;

    const initData = tg?.initData;
    const referralId = tg?.initDataUnsafe?.start_param;

    const dispatch = useAppDispatch();
    const [trigger] = useLazyFetchUserInfoQuery();
    const [joinReferral] = useJoinReferralMutation();

    useEffect(() => {
        (async () => {
            try {
                dispatch(setUserInitData(initData));
                console.log("Start params: " + referralId);
                await trigger().unwrap();

                if (referralId === undefined) return;

                await joinReferral({ id: parseInt(referralId) }).unwrap();
            } catch (error) {
                console.error(error);
            }
        })();
    }, [initData, referralId]);

    const [tonConnectUi] = useTonConnectUI();
    const [connectWallet] = useConnectWalletMutation();

    useEffect(() => {
        const unsubscribe = tonConnectUi.onStatusChange(async (wallet) => {
            console.log("Wallet address: ", wallet);

            if (!wallet) return;

            try {
                await connectWallet({
                    ton_address: wallet.account.address,
                }).unwrap();
            } catch (error) {
                console.error(error);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [tonConnectUi]);

    // useFetchUserInfoQuery();

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
                <Link to="/app/verify" className="bg-image bg-blue">
                    <Telegram className="svg-shadow-blue" />
                    Telegram
                </Link>
                <Link to="/" className="bg-image bg-blue">
                    <X className="svg-shadow-blue" />X
                </Link>
                <button
                    onClick={async () => {
                        try {
                            await joinReferral({
                                id: parseInt(referralId),
                            }).unwrap();
                        } catch (error) {
                            console.error(error);
                        }
                    }}
                >
                    Join referral
                </button>
            </footer>
        </main>
    );
};
