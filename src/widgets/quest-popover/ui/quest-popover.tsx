import { useAppDispatch } from "@/app/providers/redux/hooks";
import {
    useCompleteQuestMutation,
    Quest,
    questApi,
} from "@/entities/quest/api";

import { Cross, Telegram, Ticket } from "@/assets/icons";
import { Button } from "@/shared/ui/button";
import { Popover, usePopoverContext } from "@/shared/ui/popover";
import { formatNumber } from "@/shared/lib/helpers/format-number";
import { TelegramClient } from "@/shared/api/types";

import styles from "./index.module.css";

export const QuestPopover = () => {
    const tg = (
        window as Window & typeof globalThis & { Telegram: TelegramClient }
    ).Telegram.WebApp;

    const dispatch = useAppDispatch();
    const { data } = usePopoverContext() as {
        data: { quest: Quest; index: number; limit: number } | null;
    };
    const [completeQuest] = useCompleteQuestMutation();
    const { popoverRef } = usePopoverContext();

    const onClickHandler: React.MouseEventHandler<
        HTMLButtonElement
    > = async () => {
        if (
            data?.quest === undefined ||
            !data?.quest ||
            data?.quest?.is_completed
        )
            return;

        try {
            tg.openLink(data?.quest?.url);
            await completeQuest({ id: data?.quest.id }).unwrap();
            dispatch(
                questApi.endpoints.fetchQuestList.initiate(
                    { page: Math.floor(data?.index / data?.limit), limit: 3 },
                    { subscribe: false, forceRefetch: true }
                )
            );
            popoverRef.current?.hidePopover();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Popover.Content as="section" className={styles["quest-popover"]}>
            <header>
                <span className="rounded-full border-green shadow-green">
                    <Telegram className="svg-shadow-green" />
                </span>
                <hgroup>
                    <h2 className="text-green text-center text-shadow-green font-secondary">
                        {data?.quest?.description}
                    </h2>
                    <p>
                        +{formatNumber(data?.quest?.amount || 0)}
                        <Ticket className="svg-shadow-blue" />
                    </p>
                </hgroup>
            </header>

            <Button
                onClick={onClickHandler}
                className={`${styles["subscribe-button"]} button-blue text-shadow-blue font-secondary`}
            >
                Subscribe
            </Button>

            {/* <Button
                onClick={onClickHandler}
                className={`${styles["subscribe-button"]} button-blue text-shadow-blue font-secondary`}
            >
                Verify
            </Button> */}

            <Popover.Close className={styles["close-button"]}>
                <Cross className="text-green" />
            </Popover.Close>
        </Popover.Content>
    );
};
