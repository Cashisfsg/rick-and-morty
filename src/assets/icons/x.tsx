interface XProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const X: React.FC<XProps> = (props) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#filter0_ddd_4469_4944)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 20L13.743 10.6749L13.7537 10.6836L19.3953 4H17.51L12.9142 9.44L9.26455 4H4.32014L10.1617 12.7062L10.161 12.7055L4 20H5.88528L10.9948 13.9476L15.0556 20H20ZM8.51756 5.45454L17.2966 18.5455H15.8026L7.01647 5.45454H8.51756Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <filter
                    id="filter0_ddd_4469_4944"
                    x="2.3"
                    y="2.3"
                    width="19.4"
                    height="19.4"
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
                        result="effect1_dropShadow_4469_4944"
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
                        in2="effect1_dropShadow_4469_4944"
                        result="effect2_dropShadow_4469_4944"
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
                        in2="effect2_dropShadow_4469_4944"
                        result="effect3_dropShadow_4469_4944"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect3_dropShadow_4469_4944"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};
