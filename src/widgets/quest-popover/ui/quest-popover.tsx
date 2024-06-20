import { Cross, Telegram, Ticket } from "@/assets/icons";
import { Button } from "@/shared/ui/button";
import { Popover } from "@/shared/ui/popover";

import styles from "./index.module.css";

export const QuestPopover = () => {
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
                        +1.1k
                        <Ticket className="svg-shadow-blue" />
                    </p>
                </hgroup>
            </header>

            <Button
                className={`${styles["subscribe-button"]} button-blue text-shadow-blue font-secondary`}
            >
                Subscribe
            </Button>

            <Popover.Close className={styles["close-button"]}>
                <Cross className="text-green" />
            </Popover.Close>
        </Popover.Content>
    );
};
