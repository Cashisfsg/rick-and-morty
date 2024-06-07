import { Ticket } from "@/assets/icons";
import { formatCurrency } from "@/shared/lib/format-currency";
import { Button } from "@/shared/ui/button";
import { ClipboardCopy } from "@/shared/ui/clipboard-copy";
import { Loader } from "@/shared/ui/loader/loader";

import styles from "./index.module.css";

export const ReferralPage = () => {
    return (
        <article className="w-full">
            <header>
                <p className="text-shadow-blue">
                    {formatCurrency(2238)} <Ticket />
                </p>
                <div
                    style={{ display: "flex", alignItems: "stretch" }}
                    className=""
                >
                    <Button
                        className="button-blue font-secondary"
                        style={{ fontSize: "22px", flexBasis: "100%" }}
                    >
                        Invite a friend
                    </Button>
                    <ClipboardCopy
                        textToCopy="some text"
                        className="bg-blue border-blue shadow-blue"
                        style={{
                            borderRadius: "12px",
                            // aspectRatio: "1",
                            flexGrow: "0",
                        }}
                    />
                </div>
                <Loader />
            </header>
            {/* <section
                className={`${styles.referrals} border-green shadow-green`}
            >
                <h2 className={styles["referrals-title"]}>Referrals</h2>
            </section> */}
        </article>
    );
};
