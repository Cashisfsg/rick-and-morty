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
import TwoLines from "@/assets/img/two-lines.svg";

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
                style={{ padding: "0.5rem" }}
            >
                <header
                    className="text-start text-5.5"
                    style={{
                        paddingInline: "1rem 0.5rem",
                        // marginBlockStart: "0.5rem",
                        // marginInline: "0.7rem",
                        paddingBlockStart: "0.5rem",
                        // paddingBlockEnd: "0.5rem",
                        // borderBottom: "3px solid var(--green-light-green)",
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        color: "white",
                    }}
                >
                    Referrals
                    <img src={TwoLines} alt="" />
                </header>
                <svg
                    width="100%"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "100%" }}
                >
                    <g filter="url(#filter0_ddddd_4350_2228)">
                        <line
                            x1="0"
                            y1="10"
                            x2="100%"
                            y2="10"
                            stroke="#C6FFDD"
                            stroke-width="2"
                        />
                    </g>
                    <defs xmlns="http://www.w3.org/2000/svg">
                        <filter
                            id="filter0_ddddd_4350_2228"
                            x="0.564965"
                            y="0.564965"
                            width="375.87"
                            height="417.87"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="0.186147" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="0.372293" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect1_dropShadow_4350_2228"
                                result="effect2_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1.30303" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect2_dropShadow_4350_2228"
                                result="effect3_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2.60605" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect3_dropShadow_4350_2228"
                                result="effect4_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="4.46752" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect4_dropShadow_4350_2228"
                                result="effect5_dropShadow_4350_2228"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect5_dropShadow_4350_2228"
                                result="shape"
                            />
                        </filter>
                        <filter
                            id="filter1_dddddd_4350_2228"
                            x="303.364"
                            y="10.3637"
                            width="66.2726"
                            height="37.2726"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="0.186147" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="0.372293" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect1_dropShadow_4350_2228"
                                result="effect2_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1.30303" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect2_dropShadow_4350_2228"
                                result="effect3_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2.60605" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect3_dropShadow_4350_2228"
                                result="effect4_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="4.46752" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect4_dropShadow_4350_2228"
                                result="effect5_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="7.81816" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect5_dropShadow_4350_2228"
                                result="effect6_dropShadow_4350_2228"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect6_dropShadow_4350_2228"
                                result="shape"
                            />
                        </filter>
                        <filter
                            id="filter2_dddddd_4350_2228"
                            x="278.364"
                            y="22.3637"
                            width="91.2726"
                            height="37.2726"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="0.186147" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="0.372293" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect1_dropShadow_4350_2228"
                                result="effect2_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1.30303" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect2_dropShadow_4350_2228"
                                result="effect3_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2.60605" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect3_dropShadow_4350_2228"
                                result="effect4_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="4.46752" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect4_dropShadow_4350_2228"
                                result="effect5_dropShadow_4350_2228"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="7.81816" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect5_dropShadow_4350_2228"
                                result="effect6_dropShadow_4350_2228"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect6_dropShadow_4350_2228"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>

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
