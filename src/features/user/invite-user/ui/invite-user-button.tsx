interface ShareData {
    url: string;
    message: string;
    to?: string;
}

interface InviteUserButtonProps extends React.ComponentProps<"a"> {
    shareData: ShareData;
}

export const InviteUserButton: React.FC<InviteUserButtonProps> = ({
    shareData,
    className = "",
    children = "Invite a friend",
    ...props
}) => {
    const message = encodeURIComponent(shareData?.message || "");
    const params = {
        url: shareData.url,
        text: message,
        to: shareData?.to || "",
    };
    const searchParams = new URLSearchParams(params);

    return (
        <a
            href={`https://t.me/share/url?${searchParams}`}
            target="_blank"
            className={`button-base button-blue font-secondary ${className}`}
            {...props}
        >
            {children}
        </a>
    );
};
