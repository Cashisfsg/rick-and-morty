import { Popover, usePopoverContext } from "@/shared/ui/popover";

import { TelegramChannel } from "../../api";

import { ChevronRight } from "@/assets/icons";
import styles from "./index.module.css";

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
                src={channel?.photo}
                alt="Telegram channel logo"
                height="32"
                width="32"
                className={`${styles["channel-logo"]} rounded-full border-green shadow-green`}
            />
            <span className={`${styles["channel-name"]} text-start `}>
                {channel?.title}
            </span>
            <ChevronRight className="text-green" />
        </Popover.Trigger>
    );
};
