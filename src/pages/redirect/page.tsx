import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useAppDispatch } from "@/app/providers/redux/hooks";
import {
    useLazyFetchUserInfoQuery,
    useJoinReferralMutation,
    useUpdatePremiumStatusMutation,
    setUserInitData,
} from "@/entities/user";
import { useLazyFetchAllChannelsQuery } from "@/entities/channel";
import { TelegramClient } from "@/shared/api/types";

export const RedirectPage = () => {
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
    const [fetchChannels, { data: channels }] = useLazyFetchAllChannelsQuery();

    useEffect(() => {
        (async () => {
            try {
                dispatch(setUserInitData(initData));

                await Promise.all([
                    fetchUserInfo().unwrap(),
                    fetchChannels().unwrap(),
                ]);

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

    if (channels?.length === 0) {
        return <Navigate to="/app/account" />;
    }

    if (user?.is_verified) {
        return <Navigate to="/app/welcome" />;
    }

    return <Navigate to="/app/verify" />;
};
