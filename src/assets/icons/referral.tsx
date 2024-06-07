interface ReferralProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Referral: React.FC<ReferralProps> = (props) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M23 26.25C23 23.8631 22.0518 21.5739 20.364 19.886C18.6761 18.1982 16.3869 17.25 14 17.25M14 17.25C11.6131 17.25 9.32387 18.1982 7.63604 19.886C5.94821 21.5739 5 23.8631 5 26.25M14 17.25C17.1066 17.25 19.625 14.7316 19.625 11.625C19.625 8.5184 17.1066 6 14 6C10.8934 6 8.375 8.5184 8.375 11.625C8.375 14.7316 10.8934 17.25 14 17.25ZM27.5004 25.1251C27.5004 21.3338 25.2504 17.8126 23.0004 16.1251C23.74 15.5702 24.3314 14.8416 24.7223 14.0036C25.1132 13.1657 25.2915 12.2444 25.2414 11.3211C25.1914 10.3979 24.9145 9.50119 24.4353 8.71045C23.9561 7.9197 23.2894 7.25927 22.4941 6.7876"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    );
};
