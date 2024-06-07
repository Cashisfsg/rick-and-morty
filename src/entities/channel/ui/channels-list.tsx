import { ChevronRight } from "@/assets/icons";

import { Popover } from "@/shared/ui/popover";
import { TgChannelPopover } from "@/widgets/tg-channel-popover";

import styles from "./index.module.css";

export const ChannelsList = () => {
    return (
        <article>
            <h2 className="text-start">Channels</h2>
            <Popover.Root>
                <ul className={styles["channel-list"]}>
                    {Array(10)
                        .fill(0)
                        .map((_, index) => (
                            <li key={index}>
                                <Popover.Trigger
                                    className={`${styles["channel-list-item"]} bg-green border-green shadow-green rounded-xl`}
                                >
                                    <img
                                        src=""
                                        alt=""
                                        className={`${styles["channel-logo"]} rounded-full`}
                                    />
                                    <span
                                        className={`${styles["channel-name"]} text-start `}
                                    >
                                        Name TG Channel
                                    </span>
                                    <ChevronRight />
                                </Popover.Trigger>
                            </li>
                        ))}
                </ul>
                <TgChannelPopover />
            </Popover.Root>
        </article>
    );
};
