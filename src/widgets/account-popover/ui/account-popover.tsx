import { UserProfileImageEditorForm } from "@/features/user/profile-image-editor";

import { ChevronLeft } from "@/assets/icons";
import { Popover } from "@/shared/ui/popover";

import styles from "./index.module.css";

export const AccountPopover = () => {
    return (
        <Popover.Content as="section" className={styles["account-popover"]}>
            <hgroup>
                <h2>Avatar</h2>
                <p>Choose a suitable avatar</p>
            </hgroup>

            <UserProfileImageEditorForm />

            <Popover.Close className={styles["popover-close"]}>
                <ChevronLeft />
            </Popover.Close>
        </Popover.Content>
    );
};
