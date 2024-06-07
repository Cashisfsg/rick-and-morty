interface TonProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Ton: React.FC<TonProps> = (props) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#filter0_ddd_4410_5098)">
                <path
                    d="M19.012 9.201L12.66 19.316C12.5825 19.4389 12.4751 19.5401 12.3477 19.61C12.2204 19.68 12.0774 19.7164 11.9321 19.7159C11.7868 19.7154 11.6441 19.678 11.5172 19.6072C11.3904 19.5363 11.2836 19.4344 11.207 19.311L4.98 9.197C4.80585 8.91331 4.71377 8.58688 4.714 8.254C4.7219 7.76244 4.9245 7.2941 5.27734 6.95176C5.63018 6.60942 6.10443 6.42105 6.596 6.428H17.413C18.446 6.428 19.286 7.243 19.286 8.25C19.2853 8.58637 19.1904 8.91583 19.012 9.201ZM6.51 8.863L11.143 16.007V8.143H6.994C6.514 8.143 6.3 8.46 6.51 8.863ZM12.857 16.007L17.49 8.863C17.704 8.46 17.486 8.143 17.006 8.143H12.857V16.007Z"
                    fill="#C6FFDD"
                />
            </g>
            <defs>
                <filter
                    id="filter0_ddd_4410_5098"
                    x="3.014"
                    y="4.72781"
                    width="17.972"
                    height="16.6881"
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
                        result="effect1_dropShadow_4410_5098"
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
                        in2="effect1_dropShadow_4410_5098"
                        result="effect2_dropShadow_4410_5098"
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
                        in2="effect2_dropShadow_4410_5098"
                        result="effect3_dropShadow_4410_5098"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect3_dropShadow_4410_5098"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};
