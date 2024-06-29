import { Navigate } from "react-router-dom";

import { TelegramChannel } from "../../api";
import { ChannelListItem } from "./channel-list-item";

import styles from "./index.module.css";

interface ChannelListProps {
    channels: TelegramChannel[];
}

export const ChannelList: React.FC<ChannelListProps> = ({ channels }) => {
    if (channels.length === 0) return <Navigate to="/root/app/account" />;

    return (
        <article>
            <h2 className="text-start">Channels</h2>
            <ul className={styles["channel-list"]}>
                {channels.map((channel) => (
                    <li key={channel?.id}>
                        <ChannelListItem channel={channel} />
                    </li>
                ))}
            </ul>
        </article>
    );
};
