import { Popover, usePopoverContext } from "@/shared/ui/popover";

import { Telegram, Ticket, ChevronRight, Done } from "@/assets/icons";
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
        setData(quest);
    };

    return (
        <li {...props}>
            <Popover.Trigger
                onClick={() => onClickHandler(quest)}
                className={`${styles.quest} ${quest?.is_completed ? "border-gray" : "bg-green border-green shadow-green"}`}
            >
                <Telegram
                    height="24"
                    width="24"
                    className="border-green shadow-green text-green"
                />
                <p>{quest?.description}</p>
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
