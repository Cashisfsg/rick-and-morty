import { ReferralList } from "@/entities/user";
import { TicketCounter } from "@/entities/ticket";

import { ClipboardCopy } from "@/shared/ui/clipboard-copy";

import styles from "./index.module.css";
import { InviteUserButton } from "@/features/user/invite-user";

export const ReferralPage = () => {
    return (
        <article className={`${styles["referral-page"]}`}>
            <header>
                <TicketCounter size="large">{2238}</TicketCounter>
                <h1 className="">
                    <InviteUserButton
                        shareData={{
                            url: "https://google.com",
                            message: "Google",
                        }}
                    />
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
