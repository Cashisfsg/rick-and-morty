import { QuestPopover } from "@/widgets/quest-popover";

import { QuestList } from "@/entities/quest";
import { TicketCounter } from "@/entities/ticket";
import { CaptchaSlider } from "@/shared/ui/captcha-slider";
import { Popover } from "@/shared/ui/popover";

import styles from "./index.module.css";

export const QuestPage = () => {
    return (
        <article className={`${styles["referral-page"]} main-content`}>
            <header className={`${styles.header} `}>
                <TicketCounter size="large">{2238}</TicketCounter>
                <hgroup>
                    <h1>Hey, Morty, you know what? </h1>
                    <p className="text-blue">You can get even more TICKETS!</p>
                </hgroup>
            </header>

            <Popover.Root>
                <QuestList />
                <QuestPopover />
            </Popover.Root>

            <CaptchaSlider
                // src="https://kartinki.pics/uploads/posts/2022-03/1647923157_12-kartinkin-net-p-rik-i-morti-kartinki-v-khoroshem-kachestve-13.jpg"
                src="https://assets1.ignimgs.com/thumbs/userUploaded/2019/3/27/36190303rickandmorty1280-1553711361899.jpg"
            />
        </article>
    );
};
