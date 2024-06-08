import { ReferralList } from "@/entities/user";
import { TicketCounter } from "@/entities/ticket";

import { ClipboardCopy } from "@/shared/ui/clipboard-copy";
import { Button } from "@/shared/ui/button";

import styles from "./index.module.css";

export const ReferralPage = () => {
    return (
        <article className={`${styles["referral-page"]}`}>
            <header>
                <TicketCounter size="large">{2238}</TicketCounter>
                <h1 className="">
                    <Button className="button-blue font-secondary">
                        Invite a friend
                    </Button>
                    <ClipboardCopy
                        textToCopy="some text"
                        className="bg-blue border-blue shadow-blue"
                    />
                </h1>
            </header>

            <ReferralList />
        </article>
    );
};
