import { Popover } from "@/shared/ui/popover";

import { Telegram, Ticket as Quest, ChevronRight } from "@/assets/icons";

import styles from "./index.module.css";

interface Quest {
    amount: number;
    text: string;
    completed: boolean;
}

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
                <p>{quest?.text}</p>
                <ChevronRight className="text-green" />
                <span className="text-shadow-blue">
                    +{quest?.amount}k
                    <Quest className="svg-shadow-blue" />
                </span>
            </Popover.Trigger>
        </li>
    );
};
