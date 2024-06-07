interface XProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const X: React.FC<XProps> = (props) => {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 20L13.743 10.6749L13.7537 10.6836L19.3953 4H17.51L12.9142 9.44L9.26455 4H4.32014L10.1617 12.7062L10.161 12.7055L4 20H5.88528L10.9948 13.9476L15.0556 20H20ZM8.51756 5.45454L17.2966 18.5455H15.8026L7.01647 5.45454H8.51756Z"
                fill="currentColor"
            />
        </svg>
    );
};
