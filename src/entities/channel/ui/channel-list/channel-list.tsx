import styles from "./index.module.css";
import { TelegramChannel } from "../../api";
import { ChannelListItem } from "./channel-list-item";

interface ChannelListProps {
    channels: TelegramChannel[];
}

export const ChannelList: React.FC<ChannelListProps> = ({ channels }) => {
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
