import { Avatar } from "../avatar/avatar";
import AvatarImg from "@/assets/img/avatars/avatar-1.png";
import { Ticket } from "@/assets/icons";
import { type Referral } from "../../api";
import { formatNumber } from "@/shared/lib/helpers/format-number";

import styles from "./index.module.css";

interface ReferralListProps {
    referrals: Referral[];
}

export const ReferralList: React.FC<ReferralListProps> = ({ referrals }) => {
    return (
        <section className="border-green shadow-green">
            <div className={`bg-image bg-green ${styles.wrapper}`}></div>
            <svg
                width="100%"
                height="419"
                viewBox="0 0 377 419"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`bg-image bg-green`}
            >
                <text
                    x="30"
                    y="38"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="22"
                >
                    Referrals
                </text>

                <foreignObject
                    x="30"
                    y="70"
                    width="320"
                    height="320"
                    xmlns="http://www.w3.org/1999/xhtml"
                >
                    <ul className={styles["referral-list"]}>
                        {referrals.map((referral) => (
                            <li
                                key={referral?.id}
                                className={styles["referral-list-item"]}
                            >
                                <Avatar src={AvatarImg} />
                                <span className="truncate">
                                    {referral?.fullname}
                                </span>
                                <p>
                                    +{formatNumber(referral?.amount)}
                                    <Ticket />
                                </p>
                            </li>
                        ))}
                    </ul>
                </foreignObject>
                <g filter="url(#filter0_ddddd_4350_2228)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 10C10.8954 10 10 10.8954 10 12V144.876C10 145.126 10.0468 145.374 10.138 145.606L19.362 169.137C19.4532 169.369 19.5 169.617 19.5 169.867V257.707C19.5 258.002 19.4345 258.294 19.3082 258.561L10.1918 277.848C10.0655 278.116 10 278.408 10 278.703V407C10 408.105 10.8954 409 12 409H171.789C172.107 409 172.42 408.924 172.703 408.779L187.364 401.245C187.647 401.1 187.96 401.024 188.278 401.024H276.808C277.913 401.024 278.808 401.92 278.808 403.024V407C278.808 408.105 279.704 409 280.808 409H365C366.105 409 367 408.105 367 407V283.514V164.04V12C367 10.8954 366.105 10 365 10H12ZM11 141.654C11 141.883 11.0394 142.11 11.1165 142.326L20.8799 169.664C20.9594 169.886 20.9988 170.121 20.9964 170.357L20.0058 267.429C20.002 267.802 19.8937 268.167 19.6933 268.482L13.3041 278.522C13.1053 278.835 12.9971 279.196 12.9917 279.566L11.5073 380.504C11.5025 380.83 11.5772 381.152 11.725 381.442L24.4436 406.408C24.785 407.078 25.4736 407.5 26.2257 407.5H171.04C171.343 407.5 171.641 407.431 171.914 407.299L188.576 399.206C188.855 399.071 189.161 399.002 189.472 399.005L278.35 399.977C279.512 399.989 280.418 400.985 280.321 402.142L280.182 403.821C280.084 404.992 281.012 405.994 282.186 405.987L363.995 405.512C365.101 405.505 365.992 404.601 365.983 403.495L365 286L366 161L365.507 13.9933C365.503 12.8913 364.609 12 363.507 12H13C11.8954 12 11 12.8954 11 14V141.654Z"
                        fill="#C6FFDD"
                    />
                    <path
                        d="M10.5 62.2368C10.5 61.623 10.9976 61.1254 11.6114 61.1254H365.07C365.684 61.1254 366.181 61.623 366.181 62.2368C366.181 62.8506 365.684 63.3482 365.07 63.3482H11.6114C10.9976 63.3482 10.5 62.8506 10.5 62.2368Z"
                        fill="#C6FFDD"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 10C10.8954 10 10 10.8954 10 12V144.876C10 145.126 10.0468 145.374 10.138 145.606L19.362 169.137C19.4532 169.369 19.5 169.617 19.5 169.867V257.707C19.5 258.002 19.4345 258.294 19.3082 258.561L10.1918 277.848C10.0655 278.116 10 278.408 10 278.703V407C10 408.105 10.8954 409 12 409H171.789C172.107 409 172.42 408.924 172.703 408.779L187.364 401.245C187.647 401.1 187.96 401.024 188.278 401.024H276.808C277.913 401.024 278.808 401.92 278.808 403.024V407C278.808 408.105 279.704 409 280.808 409H365C366.105 409 367 408.105 367 407V283.514V164.04V12C367 10.8954 366.105 10 365 10H12ZM11 141.654C11 141.883 11.0394 142.11 11.1165 142.326L20.8799 169.664C20.9594 169.886 20.9988 170.121 20.9964 170.357L20.0058 267.429C20.002 267.802 19.8937 268.167 19.6933 268.482L13.3041 278.522C13.1053 278.835 12.9971 279.196 12.9917 279.566L11.5073 380.504C11.5025 380.83 11.5772 381.152 11.725 381.442L24.4436 406.408C24.785 407.078 25.4736 407.5 26.2257 407.5H171.04C171.343 407.5 171.641 407.431 171.914 407.299L188.576 399.206C188.855 399.071 189.161 399.002 189.472 399.005L278.35 399.977C279.512 399.989 280.418 400.985 280.321 402.142L280.182 403.821C280.084 404.992 281.012 405.994 282.186 405.987L363.995 405.512C365.101 405.505 365.992 404.601 365.983 403.495L365 286L366 161L365.507 13.9933C365.503 12.8913 364.609 12 363.507 12H13C11.8954 12 11 12.8954 11 14V141.654Z"
                        stroke="#C6FFDD"
                    />
                    <path
                        d="M10.5 62.2368C10.5 61.623 10.9976 61.1254 11.6114 61.1254H365.07C365.684 61.1254 366.181 61.623 366.181 62.2368C366.181 62.8506 365.684 63.3482 365.07 63.3482H11.6114C10.9976 63.3482 10.5 62.8506 10.5 62.2368Z"
                        stroke="#C6FFDD"
                    />
                </g>
                <g filter="url(#filter1_dddddd_4350_2228)">
                    <rect
                        x="319"
                        y="26"
                        width="35"
                        height="6"
                        rx="3"
                        fill="#C6FFDD"
                    />
                </g>
                <g filter="url(#filter2_dddddd_4350_2228)">
                    <rect
                        x="294"
                        y="38"
                        width="60"
                        height="6"
                        rx="3"
                        fill="#C6FFDD"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_ddddd_4350_2228"
                        x="0.564965"
                        y="0.564965"
                        width="375.87"
                        height="417.87"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
        </section>
    );
};
