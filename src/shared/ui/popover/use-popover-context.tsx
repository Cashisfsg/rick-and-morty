import { createContext, useContext } from "react";

export const PopoverContext = createContext<{
    popoverId: string;
    popoverRef: React.RefObject<HTMLDivElement>;
    data: unknown;
    setData: React.Dispatch<React.SetStateAction<unknown>>;
} | null>(null);

export const usePopoverContext = () => {
    const context = useContext(PopoverContext);

    if (!context) {
        throw new Error(
            "Component must be rendered as child of popover component"
        );
    }

    return context;
};
