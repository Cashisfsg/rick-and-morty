interface TelegramProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Telegram: React.FC<TelegramProps> = (props) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#filter0_ddd_4320_1094)">
                <path
                    d="M19.9957 6.19858C19.7742 8.658 18.8144 14.6353 18.3271 17.3905C18.1204 18.5579 17.7069 18.9471 17.323 18.9938C16.4665 19.0716 15.8168 18.4023 14.9898 17.8263C13.6903 16.9235 12.952 16.3631 11.6968 15.4915C10.2349 14.4797 11.18 13.9193 12.0217 13.0165C12.2432 12.783 16.0235 9.15611 16.0973 8.82923C16.1076 8.77972 16.1062 8.72831 16.0933 8.67949C16.0805 8.63066 16.0565 8.58588 16.0235 8.54904C15.9349 8.47121 15.8168 8.50234 15.7134 8.51791C15.5805 8.54904 13.5131 9.99667 9.48183 12.8608C8.89116 13.2811 8.35956 13.499 7.88702 13.4834C7.35542 13.4679 6.35128 13.1721 5.59818 12.9075C4.66788 12.5962 3.94431 12.425 4.00338 11.8802C4.03291 11.6 4.40208 11.3198 5.09611 11.024C9.408 9.04715 12.2727 7.73961 13.7051 7.11697C17.8103 5.31132 18.652 5 19.2131 5C19.3312 5 19.6118 5.03113 19.789 5.18679C19.9367 5.31132 19.981 5.48255 19.9957 5.60707C19.981 5.70047 20.0105 5.98066 19.9957 6.19858Z"
                    fill="#C6FFDD"
                />
            </g>
            <defs>
                <filter
                    id="filter0_ddd_4320_1094"
                    x="2.3"
                    y="3.3"
                    width="19.4"
                    height="17.4"
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
                        result="effect1_dropShadow_4320_1094"
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
                        in2="effect1_dropShadow_4320_1094"
                        result="effect2_dropShadow_4320_1094"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.85" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0941176 0 0 0 0 0.831373 0 0 0 0 0.388235 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect2_dropShadow_4320_1094"
                        result="effect3_dropShadow_4320_1094"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect3_dropShadow_4320_1094"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};
