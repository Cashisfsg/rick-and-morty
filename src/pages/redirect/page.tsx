import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/providers/redux/hooks";
import { useCreateUserMutation, setUserInitData } from "@/entities/user";
import { useLazyFetchAllChannelsQuery } from "@/entities/channel";
import { TelegramClient } from "@/shared/api/types";

import { LoadingPage } from "../loading";

export const RedirectPage = () => {
    const tg = (
        window as Window & typeof globalThis & { Telegram: TelegramClient }
    )?.Telegram?.WebApp;

    const initData = tg?.initData;
    const referralId = tg?.initDataUnsafe?.start_param;
    const premium = tg?.initDataUnsafe?.user?.is_premium;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [createUser] = useCreateUserMutation();
    const [fetchChannels] = useLazyFetchAllChannelsQuery();

    useEffect(() => {
        (async () => {
            try {
                dispatch(setUserInitData(initData));

                const [user, channels] = await Promise.all([
                    createUser({
                        isPremium: premium || false,
                        referralId: referralId || null,
                    }).unwrap(),
                    fetchChannels().unwrap(),
                ]);

                if (!user?.is_verified) {
                    navigate("/root/app/verify");
                    return;
                }

                if (channels.length === 0) {
                    navigate("/root/app/account");
                    return;
                }

                navigate("/root/app/welcome");
            } catch {
                navigate("/root/app/welcome");
            }
        })();
    }, []);

    return <LoadingPage />;
};
