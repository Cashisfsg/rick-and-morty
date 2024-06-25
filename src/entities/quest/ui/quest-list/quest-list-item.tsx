import { Popover, usePopoverContext } from "@/shared/ui/popover";

import { Telegram, Ticket, ChevronRight } from "@/assets/icons";
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
                className={`${styles.quest} bg-green border-green shadow-green`}
            >
                <Telegram
                    height="24"
                    width="24"
                    className="border-green shadow-green text-green"
                />
                <p>{quest?.description}</p>
                <ChevronRight className="text-green" />
                <span className="text-shadow-blue">
                    +{formatNumber(quest?.amount)}
                    <Ticket className="svg-shadow-blue" />
                </span>
            </Popover.Trigger>
        </li>
    );
};
