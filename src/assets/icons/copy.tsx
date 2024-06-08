interface CopyProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Copy: React.FC<CopyProps> = (props) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M4 9V27H22" stroke="white" strokeWidth="2" />
            <rect
                x="9"
                y="5"
                width="18"
                height="18"
                stroke="white"
                strokeWidth="2"
            />
        </svg>
    );
};
