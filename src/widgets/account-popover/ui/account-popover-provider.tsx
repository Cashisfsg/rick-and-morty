import { useState } from "react";

import { AccountPopoverContext } from "./use-account-popover-context";

import Avatar from "@/assets/img/avatars/avatar-1.png";

interface AccountPopoverProviderProps extends React.PropsWithChildren {}

export const AccountPopoverProvider: React.FC<AccountPopoverProviderProps> = ({
    children,
}) => {
    const [avatarImage, setAvatarImage] = useState(Avatar);

    return (
        <AccountPopoverContext.Provider value={{ avatarImage, setAvatarImage }}>
            {children}
        </AccountPopoverContext.Provider>
    );
};
