interface ChevronRightProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const ChevronRight: React.FC<ChevronRightProps> = (props) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9 18L15 12L9 6"
                stroke="#C6FFDD"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    );
};
