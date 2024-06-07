interface ChevronLeftProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const ChevronLeft: React.FC<ChevronLeftProps> = (props) => {
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
                d="M15 18L9 12L15 6"
                stroke="#C6FFDD"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    );
};
