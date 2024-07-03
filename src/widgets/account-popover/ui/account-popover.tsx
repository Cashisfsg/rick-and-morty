import { useState } from "react";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";

import { UserProfileImageEditorForm } from "@/features/user/profile-image-editor";
import { useDisconnectWalletMutation } from "@/entities/wallet";
import { Avatar } from "@/entities/user/ui/avatar/avatar";
import { Popover } from "@/shared/ui/popover";

import { useAccountPopoverContext } from "./use-account-popover-context";

import { ChevronLeft } from "@/assets/icons";

import styles from "./index.module.css";

export const AccountPopover = () => {
    const [editMode, setEditMode] = useState(false);
    const { avatarImage } = useAccountPopoverContext();
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
            as="section"
            className={`${styles["account-popover"]} ${editMode ? styles.editable : ""}`}
            // onTransitionEndCapture={(event) => {
            //     console.log("Transition finished", editMode);
            //     setEditMode(false);
            //     event.stopPropagation();
            // }}
        >
            {!editMode ? (
                <>
                    <h2>Wallet</h2>

                    <div>
                        <button onClick={() => setEditMode(true)}>
                            <Avatar src={avatarImage} size="large" />
                        </button>
                        <dl>
                            <dt>Your tone address</dt>
                            <dd className="text-5.5">{tonAddress}</dd>
                        </dl>
                    </div>

                    <button
                        onClick={onClickHandler}
                        className={styles["connect-wallet-button"]}
                    >
                        Connect another wallet
                    </button>

                    <Popover.Close className={styles["popover-close"]}>
                        <ChevronLeft />
                    </Popover.Close>
                </>
            ) : (
                <>
                    <hgroup>
                        <h2>Avatar</h2>
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
