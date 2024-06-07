interface TicketProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Ticket: React.FC<TicketProps> = (props) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#filter0_ddddd_4176_2088)">
                <path
                    d="M15.5348 35.6646L9.63232 29.7621C9.63399 29.7577 9.6363 29.7533 9.63913 29.7492C10.3731 28.7104 10.3731 27.3133 9.63913 26.2744C9.6363 26.2704 9.63399 26.266 9.63232 26.2616L25.6449 10.249C25.6493 10.2507 25.6538 10.253 25.6578 10.2558C26.6966 10.9898 28.0937 10.9898 29.1326 10.2558C29.1366 10.253 29.141 10.2507 29.1455 10.249L30.7338 11.8374C30.7336 11.844 30.7325 11.853 30.7298 11.864C30.7262 11.8789 30.7201 11.8946 30.7122 11.9092C30.2957 12.6713 30.4092 13.6466 31.0552 14.2925C31.7011 14.9385 32.6764 15.052 33.4385 14.6355C33.4531 14.6275 33.4687 14.6215 33.4837 14.6179C33.4947 14.6152 33.5037 14.6141 33.5103 14.6139L35.0479 16.1514C35.0462 16.1559 35.0439 16.1603 35.0411 16.1643C34.3071 17.2032 34.3071 18.6003 35.0411 19.6391C35.0439 19.6431 35.0462 19.6476 35.0479 19.652L19.0353 35.6646C19.0309 35.6629 19.0265 35.6606 19.0225 35.6578C17.9836 34.9238 16.5865 34.9238 15.5476 35.6578C15.5436 35.6606 15.5392 35.6629 15.5348 35.6646Z"
                    stroke="#CBFFFB"
                />
            </g>
            <g filter="url(#filter1_ddddd_4176_2088)">
                <path
                    d="M14.5432 26.9545L16.8162 24.6815L17.1506 25.016L16.1949 25.9717L19.2049 28.9816L18.8433 29.3433L15.8333 26.3333L14.8776 27.289L14.5432 26.9545Z"
                    fill="#CBFFFB"
                />
                <path
                    d="M20.7745 27.412L20.4129 27.7737L18.024 25.3848L18.3856 25.0232L20.7745 27.412ZM17.679 24.2391L17.7173 24.2773C17.7778 24.3378 17.8131 24.3789 17.8233 24.4006C17.8364 24.4194 17.8426 24.4514 17.8419 24.4967C17.8444 24.5451 17.8041 24.611 17.7208 24.6942L17.6993 24.7157C17.6362 24.7788 17.5958 24.816 17.5783 24.8272C17.5608 24.8383 17.5324 24.8444 17.4932 24.8454C17.4508 24.8432 17.4188 24.837 17.3971 24.8268C17.3783 24.8137 17.3387 24.7769 17.2782 24.7164L17.2399 24.6782C17.1794 24.6177 17.1426 24.578 17.1296 24.5592C17.1194 24.5376 17.1146 24.5041 17.1153 24.4589C17.1134 24.4225 17.118 24.3956 17.1292 24.3781C17.1404 24.3605 17.1775 24.3202 17.2407 24.257L17.2579 24.2398C17.344 24.1537 17.4127 24.1105 17.464 24.1102C17.5064 24.1124 17.537 24.12 17.5558 24.133C17.5774 24.1432 17.6185 24.1786 17.679 24.2391Z"
                    fill="#CBFFFB"
                />
                <path
                    d="M21.2622 23.3889L20.9005 23.7505L20.8098 23.6597C20.762 23.6119 20.7289 23.5845 20.7104 23.5775C20.6916 23.5645 20.6581 23.5597 20.61 23.5632C20.5619 23.5668 20.529 23.5741 20.5115 23.5853C20.4908 23.5933 20.4546 23.6231 20.4029 23.6747L19.8261 24.2516C19.7744 24.3033 19.7446 24.3395 19.7366 24.3602C19.7254 24.3777 19.7181 24.4105 19.7146 24.4587C19.711 24.5068 19.7144 24.5417 19.7245 24.5634C19.7344 24.579 19.7632 24.6107 19.811 24.6584L21.1392 25.9867C21.187 26.0344 21.2203 26.0648 21.2391 26.0779C21.2576 26.0849 21.2909 26.0866 21.339 26.0831C21.3871 26.0796 21.4215 26.0738 21.4423 26.0658C21.4598 26.0547 21.4944 26.0233 21.5461 25.9716L22.1229 25.3947C22.1746 25.3431 22.206 25.3085 22.2172 25.2909C22.2251 25.2702 22.2309 25.2358 22.2344 25.1877C22.238 25.1395 22.2348 25.1077 22.2249 25.0921C22.2147 25.0704 22.1858 25.0357 22.138 24.9879L22.0472 24.8971L22.4088 24.5355L22.5999 24.7266C22.6955 24.8222 22.7407 24.9362 22.7355 25.0688L22.7277 25.2677C22.7226 25.4003 22.6855 25.501 22.6167 25.5699L21.7212 26.4653C21.6523 26.5342 21.5516 26.5712 21.419 26.5764L21.2202 26.5842C21.0876 26.5893 20.9735 26.5442 20.8779 26.4486L19.3491 24.9197C19.2535 24.8242 19.2083 24.7101 19.2135 24.5775L19.2213 24.3786C19.2264 24.2461 19.2635 24.1453 19.3323 24.0765L20.2278 23.181C20.2967 23.1121 20.3974 23.0751 20.53 23.0699L20.7288 23.0622C20.8614 23.057 20.9755 23.1022 21.0711 23.1977L21.2622 23.3889Z"
                    fill="#CBFFFB"
                />
                <path
                    d="M23.5235 24.6631L19.988 21.1275L20.3496 20.7659L22.5234 22.9398L22.8851 22.5782L22.5702 21.4884C22.5476 21.4027 22.5339 21.3431 22.5292 21.3096C22.5273 21.2733 22.5303 21.2161 22.5384 21.138L22.558 20.9941C22.5689 20.9131 22.5798 20.8609 22.5906 20.8373C22.6044 20.8108 22.637 20.7718 22.6887 20.7201L22.7748 20.634L22.9611 20.8203C23.0344 20.8936 23.0763 20.9441 23.0868 20.9718C23.0941 20.9963 23.0878 21.0504 23.068 21.1339L23.0493 21.2099C23.035 21.2816 23.0302 21.3342 23.0349 21.3677C23.0365 21.3979 23.0471 21.4574 23.0668 21.5459L23.2696 22.3083C23.2883 22.3787 23.2928 22.4348 23.2829 22.4766L23.302 22.4957C23.3342 22.4762 23.4038 22.4799 23.5109 22.5066L25.2239 22.9626L24.8236 23.363L23.2238 22.9083L22.8579 23.2742L23.8851 24.3014L23.5235 24.6631Z"
                    fill="#CBFFFB"
                />
                <path
                    d="M26.8646 20.4619L27.3618 20.4425L27.3541 20.6414C27.3502 20.7408 27.343 20.8054 27.3324 20.835C27.3216 20.8586 27.2903 20.8962 27.2387 20.9479L26.0892 22.0973C26.0204 22.1662 25.9196 22.2032 25.787 22.2084L25.5882 22.2162C25.4556 22.2213 25.3415 22.1761 25.246 22.0806L23.7171 20.5517C23.6215 20.4561 23.5763 20.3421 23.5815 20.2095L23.5893 20.0106C23.5945 19.878 23.6315 19.7773 23.7004 19.7084L24.7034 18.7054C24.7608 18.648 24.8616 18.6109 25.0056 18.5943L25.2088 18.5822C25.335 18.5707 25.4491 18.6159 25.551 18.7178L26.5304 19.6972L25.0581 21.1695L25.5073 21.6186C25.555 21.6664 25.5883 21.6968 25.6071 21.7099C25.6256 21.7169 25.6589 21.7186 25.707 21.7151C25.7551 21.7115 25.7896 21.7058 25.8103 21.6978C25.8278 21.6866 25.8624 21.6552 25.9141 21.6036L26.7492 20.7684C26.8009 20.7168 26.8322 20.6791 26.843 20.6555C26.8535 20.6259 26.8608 20.5614 26.8646 20.4619ZM25.8583 19.7483L25.2897 19.1797C25.2419 19.132 25.2088 19.1046 25.1903 19.0976C25.1715 19.0845 25.1381 19.0798 25.0899 19.0833C25.0418 19.0868 25.009 19.0942 24.9915 19.1053C24.9707 19.1133 24.9345 19.1431 24.8829 19.1948L24.1941 19.8836C24.1424 19.9352 24.1126 19.9714 24.1046 19.9922C24.0935 20.0097 24.0861 20.0425 24.0826 20.0906C24.0791 20.1388 24.0824 20.1737 24.0926 20.1953C24.1024 20.2109 24.1313 20.2426 24.179 20.2904L24.7476 20.859L25.8583 19.7483Z"
                    fill="#CBFFFB"
                />
                <path
                    d="M25.4633 16.6077L26.1322 17.2766L26.6833 16.7255C26.7524 16.7201 26.7994 16.724 26.8243 16.7374C26.8488 16.7447 26.8977 16.785 26.971 16.8583L27.0952 16.9825L26.4667 17.611L27.9908 19.1351C28.0386 19.1829 28.0718 19.2133 28.0906 19.2264C28.1091 19.2334 28.1424 19.2351 28.1905 19.2316C28.2387 19.228 28.2731 19.2223 28.2938 19.2143C28.3114 19.2031 28.346 19.1717 28.3976 19.1201L28.7894 18.7283C28.8585 18.7228 28.9055 18.7268 28.9304 18.7402C28.9549 18.7475 29.0038 18.7878 29.0771 18.861L29.2013 18.9853L28.5728 19.6138C28.5039 19.6827 28.4032 19.7197 28.2706 19.7249L28.0717 19.7326C27.9391 19.7378 27.825 19.6926 27.7295 19.5971L26.1051 17.9726L25.8984 18.1793C25.8293 18.1847 25.7824 18.1838 25.7579 18.1765C25.733 18.1631 25.684 18.1198 25.6107 18.0465L25.4865 17.9223L25.7706 17.6382L25.1017 16.9693L25.4633 16.6077Z"
                    fill="#CBFFFB"
                />
            </g>
            <defs>
                <filter
                    id="filter0_ddddd_4176_2088"
                    x="0.194491"
                    y="0.811162"
                    width="44.2912"
                    height="44.2912"
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
                        values="0 0 0 0 0.105882 0 0 0 0 0.992157 0 0 0 0 0.921569 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4176_2088"
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
                        values="0 0 0 0 0.105882 0 0 0 0 0.992157 0 0 0 0 0.921569 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_4176_2088"
                        result="effect2_dropShadow_4176_2088"
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
                        values="0 0 0 0 0.105882 0 0 0 0 0.992157 0 0 0 0 0.921569 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect2_dropShadow_4176_2088"
                        result="effect3_dropShadow_4176_2088"
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
                        values="0 0 0 0 0.105882 0 0 0 0 0.992157 0 0 0 0 0.921569 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect3_dropShadow_4176_2088"
                        result="effect4_dropShadow_4176_2088"
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
                        values="0 0 0 0 0.105882 0 0 0 0 0.992157 0 0 0 0 0.921569 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect4_dropShadow_4176_2088"
                        result="effect5_dropShadow_4176_2088"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect5_dropShadow_4176_2088"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_ddddd_4176_2088"
                    x="5.60813"
                    y="7.67264"
                    width="32.5282"
                    height="30.6057"
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
                        values="0 0 0 0 0.105882 0 0 0 0 0.992157 0 0 0 0 0.921569 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4176_2088"
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
                        values="0 0 0 0 0.105882 0 0 0 0 0.992157 0 0 0 0 0.921569 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_4176_2088"
                        result="effect2_dropShadow_4176_2088"
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
                        values="0 0 0 0 0.105882 0 0 0 0 0.992157 0 0 0 0 0.921569 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect2_dropShadow_4176_2088"
                        result="effect3_dropShadow_4176_2088"
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
                        values="0 0 0 0 0.105882 0 0 0 0 0.992157 0 0 0 0 0.921569 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect3_dropShadow_4176_2088"
                        result="effect4_dropShadow_4176_2088"
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
                        values="0 0 0 0 0.105882 0 0 0 0 0.992157 0 0 0 0 0.921569 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect4_dropShadow_4176_2088"
                        result="effect5_dropShadow_4176_2088"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect5_dropShadow_4176_2088"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};
