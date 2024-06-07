interface QRCodeProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const QRCode: React.FC<QRCodeProps> = (props) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15 15H14V14H15V15ZM20 15V14H21V15H20ZM20 20H21V21H20V20ZM15 20V21H14V20H15ZM17 18V17H18V18H17Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M3 3H10V10H3V3ZM14 3H21V10H14V3ZM3 14H10V21H3V14Z"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
};
