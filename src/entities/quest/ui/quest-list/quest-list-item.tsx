import { Popover, usePopoverContext } from "@/shared/ui/popover";

import { Telegram, Referral, Ticket, ChevronRight, Done } from "@/assets/icons";
import { Quest } from "../../api/types";

import { formatNumber } from "@/shared/lib/helpers/format-number";

import styles from "./index.module.css";

interface QuestListItemProps extends React.ComponentPropsWithoutRef<"button"> {
    quest: Quest;
    index: number;
    limit: number;
}

export const QuestListItem: React.FC<QuestListItemProps> = ({
    quest,
    index,
    limit,
    ...props
}) => {
    const { setData } = usePopoverContext();

    const onClickHandler = (quest: Quest) => {
        if (quest?.is_completed) return;
        setData({ quest: quest, index: index, limit: limit });
    };

    return (
        <Popover.Trigger
            disabled={quest?.is_completed}
            onClick={() => onClickHandler(quest)}
            className={`${styles.quest} bg-green bg-image ${quest?.is_completed ? "border-gray" : "border-green shadow-green"}`}
            {...props}
        >
            {quest?.is_completed ? (
                <Referral
                    height="24"
                    width="24"
                    className="text-gray border-gray"
                />
            ) : (
                <Telegram
                    height="24"
                    width="24"
                    className="border-green shadow-green text-green"
                />
            )}
            <p
                className={`w-full truncate text-start ${quest?.is_completed ? "text-gray" : ""}`}
            >
                {quest?.description}
            </p>
            {quest?.is_completed ? (
                <Done />
            ) : (
                <ChevronRight className="text-green" />
            )}
            <span
                className={
                    quest?.is_completed
                        ? "text-gray"
                        : "text-blue-secondary text-shadow-blue"
                }
            >
                +{formatNumber(quest?.amount || 0)}
                <Ticket
                    className={quest?.is_completed ? "" : "svg-shadow-blue"}
                />
            </span>
        </Popover.Trigger>
        // </li>
    );
};
