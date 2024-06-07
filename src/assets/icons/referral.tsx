interface ReferralProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Referral: React.FC<ReferralProps> = (props) => {
    return (
        <svg
            width="42"
            height="40"
            viewBox="0 0 42 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#filter0_ddddd_4176_2086)">
                <path
                    d="M28 30.25C28 27.8631 27.0518 25.5739 25.364 23.886C23.6761 22.1982 21.3869 21.25 19 21.25M19 21.25C16.6131 21.25 14.3239 22.1982 12.636 23.886C10.9482 25.5739 10 27.8631 10 30.25M19 21.25C22.1066 21.25 24.625 18.7316 24.625 15.625C24.625 12.5184 22.1066 10 19 10C15.8934 10 13.375 12.5184 13.375 15.625C13.375 18.7316 15.8934 21.25 19 21.25ZM32.5004 29.1251C32.5004 25.3338 30.2504 21.8126 28.0004 20.1251C28.74 19.5702 29.3314 18.8416 29.7223 18.0036C30.1132 17.1657 30.2915 16.2444 30.2414 15.3211C30.1914 14.3979 29.9145 13.5012 29.4353 12.7104C28.9561 11.9197 28.2894 11.2593 27.4941 10.7876"
                    stroke="#C6FFDD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_ddddd_4176_2086"
                    x="0.564965"
                    y="0.564965"
                    width="41.3705"
                    height="39.1201"
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
                        result="effect1_dropShadow_4176_2086"
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
                        in2="effect1_dropShadow_4176_2086"
                        result="effect2_dropShadow_4176_2086"
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
                        in2="effect2_dropShadow_4176_2086"
                        result="effect3_dropShadow_4176_2086"
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
                        in2="effect3_dropShadow_4176_2086"
                        result="effect4_dropShadow_4176_2086"
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
                        in2="effect4_dropShadow_4176_2086"
                        result="effect5_dropShadow_4176_2086"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect5_dropShadow_4176_2086"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};
