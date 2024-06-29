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
import { handleErrorResponse } from "@/shared/lib/helpers/handle-error-response";

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
            let response;

            try {
                dispatch(setUserInitData(initData));

                response = await Promise.all([
                    fetchUserInfo().unwrap(),
                    fetchChannels().unwrap(),
                ]);

                if (premium === true) {
                    await updatePremiumStatus({ isPremium: true }).unwrap();
                }

                if (referralId) {
                    await joinReferral({ id: parseInt(referralId) }).unwrap();
                }
            } catch (error) {
                throw new Error(handleErrorResponse(error) || "Unknow Error");
            } finally {
                if (response !== undefined && !response[0]?.is_verified) {
                    navigate("/root/app/verify");
                    return;
                }

                if (response !== undefined && response[1]?.length === 0) {
                    navigate("/root/app/account");
                    return;
                }

                navigate("/root/app/welcome");
                return;
            }
        })();
    }, []);

    return <LoadingPage />;
};
