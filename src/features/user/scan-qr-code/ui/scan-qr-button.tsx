import { QRCode } from "@/assets/icons";
import { TelegramClient } from "@/shared/api/types";

import { composeEventHandlers } from "@/shared/lib/compose-event-handlers";

interface ScanQRButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export const ScanQRButton: React.FC<ScanQRButtonProps> = ({
    onClick,
    ...props
}) => {
    const tg = (
        window as Window & typeof globalThis & { Telegram: TelegramClient }
    ).Telegram.WebApp;

    const scanQRCode: React.MouseEventHandler<HTMLButtonElement> = () => {
        tg.showScanQrPopup();
    };

    return (
        <button onClick={composeEventHandlers(onClick, scanQRCode)} {...props}>
            <QRCode />
        </button>
    );
};
