import { TelegramClient } from "@/shared/api/types";
import { composeEventHandlers } from "@/shared/lib/compose-event-handlers";
import { Button } from "@/shared/ui/button";

interface ShareData {
    url: string;
    message: string;
    to?: string;
}

interface InviteUserButtonProps extends React.ComponentProps<"button"> {
    shareData: ShareData;
}

export const InviteUserButton: React.FC<InviteUserButtonProps> = ({
    shareData,
    className = "",
    onClick,
    children = "Invite a friend",
    ...props
}) => {
    const tg = (
        window as Window & typeof globalThis & { Telegram: TelegramClient }
    ).Telegram.WebApp;
    const message = encodeURIComponent(shareData.message);
    const params = {
        url: shareData.url,
        text: message,
        to: shareData?.to || "",
    };
    const searchParams = new URLSearchParams(params);

    const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        tg.openLink(`https://t.me/share/url?${searchParams}`);
    };

    return (
        <Button
            onClick={composeEventHandlers(onClick, onClickHandler)}
            className={`button-blue font-secondary ${className}`}
            {...props}
        >
            {children}
        </Button>
    );
};
