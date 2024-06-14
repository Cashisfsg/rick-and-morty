import { createContext, useContext } from "react";

export const AccountPopoverContext = createContext<{
    avatarImage: string;
    setAvatarImage: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const useAccountPopoverContext = () => {
    const context = useContext(AccountPopoverContext);

    if (!context) {
        throw new Error(
            "Component must be rendered as child of account popover component"
        );
    }

    return context;
};
