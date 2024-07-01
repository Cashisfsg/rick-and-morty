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

import Bg from "@/assets/img/rbg.svg";

export const ReferralPage = () => {
    const tg = (
        window as Window & typeof globalThis & { Telegram: TelegramClient }
    )?.Telegram?.WebApp;

    const userId = tg?.initDataUnsafe?.user?.id;

    const { data: user } = useFetchUserInfoQuery();

    return (
        <article className={`${styles["referral-page"]} main-content`}>
            <header>
                <TicketCounter size="large">{user?.balance || 0}</TicketCounter>
                <h1>
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

            {/* <ul style={{ position: "relative" }}>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <img
                    src={Bg}
                    alt=""
                    style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: 0,
                        objectFit: "fill",
                    }}
                />
            </ul> */}

            <section
                className={`${styles["image-container"]} bg-image bg-green border-green shadow-green`}
                // style={{ marginInline: "-0.25rem", paddingInline: "0.25rem" }}
            >
                <header
                    className="text-start text-5.5 shadow-green"
                    style={{
                        paddingInline: "1.5rem",
                        marginBlockStart: "0.5rem",
                        marginInline: "0.7rem",
                        paddingBlockStart: "0.5rem",
                        paddingBlockEnd: "0.5rem",
                        borderBottom: "3px solid var(--green-light-green)",

                        color: "white",
                    }}
                >
                    Referrals
                </header>

                <FetchReferrals
                    renderSuccess={(referrals) => (
                        <ReferralList referrals={referrals} />
                    )}
                    loadingFallback={<ReferralList referrals={[]} />}
                />

                <img
                    src={Bg}
                    alt="Distorted SVG"
                    className={`${styles["distorted-image"]}`}
                    style={{ zIndex: -1 }}
                />
            </section>
        </article>
    );
};
