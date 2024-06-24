import { useCompleteQuestMutation, Quest } from "@/entities/quest/api";

import { Cross, Telegram, Ticket } from "@/assets/icons";
import { Button } from "@/shared/ui/button";
import { Popover, usePopoverContext } from "@/shared/ui/popover";
import { formatNumber } from "@/shared/lib/helpers/format-number";

import styles from "./index.module.css";

export const QuestPopover = () => {
    const { data: quest } = usePopoverContext();
    const [completeQuest] = useCompleteQuestMutation();

    const onClickHandler: React.MouseEventHandler<
        HTMLButtonElement
    > = async () => {
        if (quest === undefined || !quest) return;

        try {
            await completeQuest({ id: (quest as Quest).id }).unwrap();
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
                        Join our telegram channel
                    </h2>
                    <p>
                        +{formatNumber((quest as Quest).amount)}
                        <Ticket className="svg-shadow-blue" />
                    </p>
                </hgroup>
            </header>

            <Button
                className={`${styles["subscribe-button"]} button-blue text-shadow-blue font-secondary`}
            >
                Subscribe
            </Button>

            <Button
                onClick={onClickHandler}
                className={`${styles["subscribe-button"]} button-blue text-shadow-blue font-secondary`}
            >
                Verify
            </Button>

            <Popover.Close className={styles["close-button"]}>
                <Cross className="text-green" />
            </Popover.Close>
        </Popover.Content>
    );
};
