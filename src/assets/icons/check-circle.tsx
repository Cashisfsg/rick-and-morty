interface CheckCircleProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const CheckCircle: React.FC<CheckCircleProps> = (props) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M14.6667 7.38668V8.00001C14.6658 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89023 14.3893C8.51162 14.7969 7.03817 14.7479 5.68964 14.2497C4.34112 13.7515 3.18977 12.8307 2.4073 11.6247C1.62484 10.4187 1.25319 8.99205 1.34778 7.55755C1.44237 6.12305 1.99813 4.75756 2.93218 3.66473C3.86623 2.57189 5.12852 1.81027 6.53079 1.49344C7.93306 1.17662 9.40018 1.32157 10.7133 1.90668"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 7.33335L8 9.33335L14.6667 2.66669"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
