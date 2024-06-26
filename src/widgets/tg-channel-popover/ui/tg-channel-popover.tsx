import { useNavigate } from "react-router-dom";

import {
    TelegramChannel,
    useVerifyChannelSubscriptionMutation,
} from "@/entities/channel";
import { TelegramClient } from "@/shared/api/types";
import { Popover, usePopoverContext } from "@/shared/ui/popover";
import { Button } from "@/shared/ui/button";
import { Cross } from "@/assets/icons";

import styles from "./index.module.css";

export const TgChannelPopover = () => {
    const tg = (
        window as Window & typeof globalThis & { Telegram: TelegramClient }
    ).Telegram.WebApp;

    const navigate = useNavigate();
    const [verify] = useVerifyChannelSubscriptionMutation();
    const { data: channel } = usePopoverContext() as { data: TelegramChannel };

    const onClickHandler = () => {
        tg.openTelegramLink(channel?.url);
    };

    const verifyChannelSubscription = async () => {
        try {
            await verify({ id: channel.id }).unwrap();
            navigate("/app/account");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Popover.Content as="section" className={styles["tg-channel-popover"]}>
            <header>
                <img src="" alt="" width="64" height="64" />
                <h2>Join {channel?.title} telegram channel</h2>
            </header>

            <Button
                onClick={onClickHandler}
                className={`${styles["subscribe-button"]} button-base button-blue text-shadow-blue`}
            >
                Subscribe
            </Button>

            <Button
                onClick={verifyChannelSubscription}
                className={`${styles["subscribe-button"]} button-base button-blue text-shadow-blue`}
            >
                Verify
            </Button>

            <Popover.Close className={styles["close-button"]}>
                <Cross className="text-green" />
            </Popover.Close>
        </Popover.Content>
    );
};
