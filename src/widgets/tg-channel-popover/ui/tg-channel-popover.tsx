import { Popover } from "@/shared/ui/popover";
import { Button } from "@/shared/ui/button";
import { Cross } from "@/assets/icons";

import styles from "./index.module.css";

export const TgChannelPopover = () => {
    return (
        <Popover.Content as="section" className={styles["tg-channel-popover"]}>
            <header>
                <img src="" alt="" width="64" height="64" />
                <h2>Join Name Channel telegram channel</h2>
            </header>

            <Button
                className={`${styles["subscribe-button"]} button-blue text-shadow-blue`}
            >
                Subscribe
            </Button>

            <Popover.Close className={styles["close-button"]}>
                <Cross className="text-green" />
            </Popover.Close>
        </Popover.Content>
    );
};
