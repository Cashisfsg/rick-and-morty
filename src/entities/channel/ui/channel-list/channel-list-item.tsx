import { Popover, usePopoverContext } from "@/shared/ui/popover";

import { TelegramChannel } from "../../api";

import { ChevronRight } from "@/assets/icons";
import styles from "./index.module.css";

import TelegramChannelLogo from "@/assets/img/tg-avatar.png";

interface ChannelListItemProps {
    channel: TelegramChannel;
}

export const ChannelListItem: React.FC<ChannelListItemProps> = ({
    channel,
}) => {
    const { setData } = usePopoverContext();

    const onClickHandler = () => {
        setData(channel);
    };

    return (
        <Popover.Trigger
            onClick={onClickHandler}
            className={`${styles["channel-list-item"]} bg-green border-green bg-image shadow-green rounded-xl`}
        >
            <img
                src={TelegramChannelLogo}
                alt="Telegram channel logo"
                height="32"
                width="32"
                className={`${styles["channel-logo"]} rounded-full shadow-green`}
            />
            <span className={`${styles["channel-name"]} text-start `}>
                {channel?.title}
            </span>
            <ChevronRight className="text-green" />
        </Popover.Trigger>
    );
};
