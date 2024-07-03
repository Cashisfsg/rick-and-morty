import { useState } from "react";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";

import { UserProfileImageEditorForm } from "@/features/user/profile-image-editor";
import { useDisconnectWalletMutation } from "@/entities/wallet";
import { Avatar } from "@/entities/user/ui/avatar/avatar";
import { Popover } from "@/shared/ui/popover";

// import { useAccountPopoverContext } from "./use-account-popover-context";

import { ChevronLeft } from "@/assets/icons";

import styles from "./index.module.css";

export const AccountPopover = () => {
    const [editMode, setEditMode] = useState(false);
    // const { avatarImage } = useAccountPopoverContext();
    const tonAddress = useTonAddress();
    const [tonConnectUi] = useTonConnectUI();
    const [disconnectWallet] = useDisconnectWalletMutation();

    const onClickHandler: React.MouseEventHandler<
        HTMLButtonElement
    > = async () => {
        try {
            // await tonConnectUi.disconnect();
            // await disconnectWallet();
            await Promise.all([tonConnectUi.disconnect(), disconnectWallet()]);
            await tonConnectUi.openModal();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Popover.Content
            as="article"
            className={`${styles["account-popover"]} ${editMode ? styles.editable : ""}`}
            // onTransitionEndCapture={(event) => {
            //     console.log("Transition finished", editMode);
            //     setEditMode(false);
            //     event.stopPropagation();
            // }}
        >
            {!editMode ? (
                <>
                    <h2 className="text-green-tertiary">Wallet & Avatar</h2>

                    <section className={styles["avatar-section"]}>
                        <h3>Your Avatar</h3>

                        <Avatar
                            size="large"
                            className="border-green shadow-green"
                        />
                        <button onClick={() => setEditMode(true)}>
                            Choose custom avatar
                        </button>
                    </section>

                    <section className={styles["ton-section"]}>
                        <dl>
                            <dt>Your tone address</dt>
                            <dd className="text-5.5">{tonAddress}</dd>
                        </dl>

                        <button
                            onClick={onClickHandler}
                            className={styles["connect-wallet-button"]}
                        >
                            Connect another wallet
                        </button>
                    </section>

                    <Popover.Close className={styles["popover-close"]}>
                        <ChevronLeft />
                    </Popover.Close>
                </>
            ) : (
                <>
                    <hgroup>
                        <h2 className="text-green-tertiary">Avatar</h2>
                        <p>Choose a suitable avatar</p>
                    </hgroup>

                    <UserProfileImageEditorForm />

                    <button
                        onClick={() => setEditMode(false)}
                        className={styles["popover-close"]}
                    >
                        <ChevronLeft />
                    </button>
                </>
            )}
        </Popover.Content>
    );
};
