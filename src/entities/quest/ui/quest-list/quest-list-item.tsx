import { Popover, usePopoverContext } from "@/shared/ui/popover";

import { Telegram, Referral, Ticket, ChevronRight, Done } from "@/assets/icons";
import { Quest } from "../../api/types";

import { formatNumber } from "@/shared/lib/helpers/format-number";

import styles from "./index.module.css";

interface QuestListItemProps extends React.ComponentPropsWithoutRef<"li"> {
    quest: Quest;
}

export const QuestListItem: React.FC<QuestListItemProps> = ({
    quest,
    ...props
}) => {
    const { setData } = usePopoverContext();

    const onClickHandler = (quest: Quest) => {
        if (quest?.is_completed) return;
        setData(quest);
    };

    return (
        <li {...props}>
            <Popover.Trigger
                disabled={quest?.is_completed}
                onClick={() => onClickHandler(quest)}
                className={`${styles.quest} bg-green bg-image ${quest?.is_completed ? "border-gray" : "border-green shadow-green"}`}
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
                <p className={quest?.is_completed ? "text-gray" : undefined}>
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
                            : "text-blue text-shadow-blue"
                    }
                >
                    +{formatNumber(quest?.amount)}
                    <Ticket
                        className={
                            quest?.is_completed ? undefined : "svg-shadow-blue"
                        }
                    />
                </span>
            </Popover.Trigger>
        </li>
    );
};
