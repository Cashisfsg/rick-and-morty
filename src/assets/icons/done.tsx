interface DoneProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Done: React.FC<DoneProps> = (props) => {
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
                d="M20 6L9 17L4 12"
                stroke="#18d463"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    );
};
