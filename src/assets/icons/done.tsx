interface DoneProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Done: React.FC<DoneProps> = (props) => {
    return (
        <svg
            width="38"
            height="32"
            viewBox="0 0 38 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#filter0_ddddd_4176_2090)">
                <path
                    d="M27 11L16 22L11 17"
                    stroke="#B2F8C0"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_ddddd_4176_2090"
                    x="0.650752"
                    y="0.650781"
                    width="36.6985"
                    height="31.2843"
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
                        result="effect1_dropShadow_4176_2090"
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
                        in2="effect1_dropShadow_4176_2090"
                        result="effect2_dropShadow_4176_2090"
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
                        in2="effect2_dropShadow_4176_2090"
                        result="effect3_dropShadow_4176_2090"
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
                        in2="effect3_dropShadow_4176_2090"
                        result="effect4_dropShadow_4176_2090"
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
                        in2="effect4_dropShadow_4176_2090"
                        result="effect5_dropShadow_4176_2090"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect5_dropShadow_4176_2090"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};
