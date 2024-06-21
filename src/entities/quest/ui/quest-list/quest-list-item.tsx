import { Popover } from "@/shared/ui/popover";

import { Telegram, Ticket, ChevronRight } from "@/assets/icons";
import { Quest } from "../../api/types";

import styles from "./index.module.css";

interface QuestListItemProps extends React.ComponentPropsWithoutRef<"li"> {
    quest: Quest;
}

export const QuestListItem: React.FC<QuestListItemProps> = ({
    quest,
    ...props
}) => {
    return (
        <li {...props}>
            <Popover.Trigger
                className={`${styles.quest}  bg-green border-green shadow-green`}
            >
                <Telegram
                    height="24"
                    width="24"
                    className="border-green shadow-green text-green"
                />
                <p>{quest?.description}</p>
                <ChevronRight className="text-green" />
                <span className="text-shadow-blue">
                    +{quest?.amount}k
                    <Ticket className="svg-shadow-blue" />
                </span>
            </Popover.Trigger>
        </li>
    );
};
