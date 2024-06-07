interface CrossProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Cross: React.FC<CrossProps> = (props) => {
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
                d="M18 6L6 18"
                stroke="#B2F8C0"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M6 6L18 18"
                stroke="#B2F8C0"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    );
};
