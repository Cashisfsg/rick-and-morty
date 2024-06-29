import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/providers/redux/hooks";
import {
    useLazyFetchUserInfoQuery,
    useJoinReferralMutation,
    useUpdatePremiumStatusMutation,
    setUserInitData,
} from "@/entities/user";
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
    const [fetchUserInfo] = useLazyFetchUserInfoQuery();
    const [joinReferral] = useJoinReferralMutation();
    const [updatePremiumStatus] = useUpdatePremiumStatusMutation();
    const [fetchChannels] = useLazyFetchAllChannelsQuery();

    useEffect(() => {
        (async () => {
            try {
                dispatch(setUserInitData(initData));

                const [user, channels] = await Promise.all([
                    fetchUserInfo().unwrap(),
                    fetchChannels().unwrap(),
                ]);

                console.log(user, channels);

                if (premium === true) {
                    await updatePremiumStatus({ isPremium: true }).unwrap();
                }

                if (referralId) {
                    await joinReferral({ id: parseInt(referralId) }).unwrap();
                }

                if (!user?.is_verified) {
                    navigate("/root/app/verify");
                    return;
                }

                if (channels?.length === 0) {
                    navigate("/root/app/account");
                    return;
                }

                navigate("/root/app/welcome");
                return;
            } catch (error) {
                throw new Error(error?.message);
            }
        })();
    }, []);

    return <LoadingPage />;
};
