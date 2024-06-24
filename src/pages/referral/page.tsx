import {
    FetchReferrals,
    ReferralList,
    useFetchUserInfoQuery,
} from "@/entities/user";
import { TicketCounter } from "@/entities/ticket";

import { ClipboardCopy } from "@/shared/ui/clipboard-copy";

import { InviteUserButton } from "@/features/user/invite-user";
import { TelegramClient } from "@/shared/api/types";

import styles from "./index.module.css";

export const ReferralPage = () => {
    const tg = (
        window as Window & typeof globalThis & { Telegram: TelegramClient }
    )?.Telegram?.WebApp;

    const userId = tg?.initDataUnsafe?.user?.id;

    const { data: user } = useFetchUserInfoQuery();

    return (
        <article className={`${styles["referral-page"]}`}>
            <header>
                <TicketCounter size="large">{user?.balance || 0}</TicketCounter>
                <h1 className="">
                    <InviteUserButton
                        shareData={{
                            url: `https://t.me/${import.meta.env.VITE_BOT_NAME}/app?startapp=${userId}`,
                            message:
                                "Играй со мной \n💸 100к монет в качестве первого подарка \n🔥 200к монет, если у тебя есть Telegram Premium",
                        }}
                    />
                    <ClipboardCopy
                        textToCopy={`https://t.me/${import.meta.env.VITE_BOT_NAME}/app?startapp=${userId}\nИграй со мной \n💸 100к монет в качестве первого подарка \n🔥 200к монет, если у тебя есть Telegram Premium`}
                        className="bg-blue border-blue shadow-blue"
                    />
                </h1>
            </header>

            <FetchReferrals
                renderSuccess={(referrals) => (
                    <ReferralList referrals={referrals} />
                )}
                loadingFallback={<ReferralList referrals={[]} />}
            />
        </article>
    );
};
