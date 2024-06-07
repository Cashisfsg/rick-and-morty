interface ArrowProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Arrow: React.FC<ArrowProps> = (props) => {
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
                d="M22 12H2M22 12L16 18M22 12L16 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    );
};
