interface HologramProps extends React.ComponentProps<"svg"> {}

export const Hologram: React.FC<HologramProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <svg
            width="362"
            height="282"
            viewBox="0 0 362 282"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`border-green shadow-green w-full ${className || ""}`}
            style={{ position: "relative", isolation: "isolate" }}
            {...props}
        >
            <foreignObject
                x="0"
                y="0"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/1999/xhtml"
            >
                {children}
            </foreignObject>
            <g filter="url(#filter0_ddddd_4442_5164)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.6149 208.958C10.847 206.325 10.7116 89.8187 10.6149 31.8951L21.6397 13.2375H166.413L171.926 22.5663H349.774V55.3084L344.552 62.6251V159.571L352.385 167.985V255.785L338.169 272.979H21.6397V222.494L10.6149 208.958ZM20.3614 20.5683L12.8181 33.7384V200.558L23.843 214.094L25.2936 215.923V270.433H332.539L349.946 248.483V172.023L337.181 159.585V65.5659L342.693 58.615L347.915 51.2984V26.7875H198.5L193.277 33.3725H172.098L163.975 20.5683H20.3614Z"
                    fill="#C6FFDD"
                />
            </g>
            <g filter="url(#filter1_ddddd_4442_5164)">
                <path
                    d="M257.983 15.0389L264.13 10.825M267.642 15.0389L273.789 10.825M281.4 15.0389L287.547 10.825M302.475 15.0389L308.622 10.825M250.372 15.0389L256.519 10.825H349.309V15.0389H250.372Z"
                    stroke="#C6FFDD"
                    strokeWidth="2"
                />
            </g>
            <g filter="url(#filter2_ddddd_4442_5164)">
                <rect
                    x="178.156"
                    y="10.825"
                    width="57.7729"
                    height="4.74071"
                    rx="2.37036"
                    fill="#C6FFDD"
                />
            </g>
            <g filter="url(#filter3_ddddd_4442_5164)">
                <path
                    d="M10.6149 240.674H17.2298M10.6149 245.291H17.2298M10.6149 252.106H17.2298M10.6149 237.596H17.2298V268.154H10.6149V237.596Z"
                    stroke="#C6FFDD"
                    strokeWidth="2"
                />
            </g>
            <defs>
                <filter
                    id="filter0_ddddd_4442_5164"
                    x="1.67986"
                    y="4.30251"
                    width="359.64"
                    height="277.612"
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
                        result="effect1_dropShadow_4442_5164"
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
                        in2="effect1_dropShadow_4442_5164"
                        result="effect2_dropShadow_4442_5164"
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
                        in2="effect2_dropShadow_4442_5164"
                        result="effect3_dropShadow_4442_5164"
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
                        in2="effect3_dropShadow_4442_5164"
                        result="effect4_dropShadow_4442_5164"
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
                        in2="effect4_dropShadow_4442_5164"
                        result="effect5_dropShadow_4442_5164"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect5_dropShadow_4442_5164"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_ddddd_4442_5164"
                    x="238.21"
                    y="0.889916"
                    width="121.033"
                    height="24.0839"
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
                        result="effect1_dropShadow_4442_5164"
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
                        in2="effect1_dropShadow_4442_5164"
                        result="effect2_dropShadow_4442_5164"
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
                        in2="effect2_dropShadow_4442_5164"
                        result="effect3_dropShadow_4442_5164"
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
                        in2="effect3_dropShadow_4442_5164"
                        result="effect4_dropShadow_4442_5164"
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
                        in2="effect4_dropShadow_4442_5164"
                        result="effect5_dropShadow_4442_5164"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect5_dropShadow_4442_5164"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter2_ddddd_4442_5164"
                    x="169.221"
                    y="1.88992"
                    width="75.643"
                    height="22.6108"
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
                        result="effect1_dropShadow_4442_5164"
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
                        in2="effect1_dropShadow_4442_5164"
                        result="effect2_dropShadow_4442_5164"
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
                        in2="effect2_dropShadow_4442_5164"
                        result="effect3_dropShadow_4442_5164"
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
                        in2="effect3_dropShadow_4442_5164"
                        result="effect4_dropShadow_4442_5164"
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
                        in2="effect4_dropShadow_4442_5164"
                        result="effect5_dropShadow_4442_5164"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect5_dropShadow_4442_5164"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter3_ddddd_4442_5164"
                    x="0.679864"
                    y="227.661"
                    width="26.485"
                    height="50.4279"
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
                        result="effect1_dropShadow_4442_5164"
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
                        in2="effect1_dropShadow_4442_5164"
                        result="effect2_dropShadow_4442_5164"
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
                        in2="effect2_dropShadow_4442_5164"
                        result="effect3_dropShadow_4442_5164"
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
                        in2="effect3_dropShadow_4442_5164"
                        result="effect4_dropShadow_4442_5164"
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
                        in2="effect4_dropShadow_4442_5164"
                        result="effect5_dropShadow_4442_5164"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect5_dropShadow_4442_5164"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};
