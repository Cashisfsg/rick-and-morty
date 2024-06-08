import { useId } from "react";

import { CheckCircle, Copy } from "@/assets/icons";
import { composeEventHandlers } from "@/shared/lib/compose-event-handlers";

import styles from "./index.module.css";

interface ClipboardCopyProps extends React.ComponentPropsWithoutRef<"button"> {
    textToCopy: string | null | undefined;
    children?: never;
}

export const ClipboardCopy: React.FC<ClipboardCopyProps> = ({
    className,
    onClick,
    textToCopy,
    ...props
}) => {
    const popoverId = useId();

    const copyToClipboard: React.MouseEventHandler<
        HTMLButtonElement
    > = async () => {
        if (!textToCopy) return;

        try {
            await navigator.clipboard.writeText(textToCopy);
        } catch (error) {
            console.error(error);
        }
    };

    const onAnimationEndHandler: React.AnimationEventHandler<HTMLDivElement> = (
        event
    ) => {
        const popover = event.currentTarget;
        popover?.hidePopover();
    };

    return (
        <>
            <button
                title="Скопировать в буфер обмена"
                popovertarget={popoverId}
                popovertargetaction="show"
                onClick={composeEventHandlers(onClick, copyToClipboard)}
                className={`${styles["clipboard-copy"]} ${className || ""}`}
                {...props}
            >
                <Copy />
            </button>
            <div
                id={popoverId}
                popover="manual"
                onAnimationEnd={onAnimationEndHandler}
                className={styles.tooltip}
            >
                <CheckCircle />
                <span>Text copied</span>
            </div>
        </>
    );
};
