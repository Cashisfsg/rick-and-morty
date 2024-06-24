import { useState, useMemo, useId } from "react";

import { Portal as PopoverPortal } from "@/shared/ui/portal";
import { PopoverContext, usePopoverContext } from "./use-popover-context";

import styles from "./index.module.css";

interface PopoverRootProps extends React.PropsWithChildren {}

export const Root: React.FC<PopoverRootProps> = ({ children }) => {
    const popoverId = `popover-${useId()}`;
    const [data, setData] = useState<unknown>(null);
    const contextValue = useMemo(
        () => ({ popoverId, data, setData }),
        [popoverId, data, setData]
    );

    return (
        <PopoverContext.Provider value={contextValue}>
            {children}
        </PopoverContext.Provider>
    );
};

Root.displayName = "Popover.Root";

export const Portal = PopoverPortal;

Portal.displayName = "Popover.Portal";

interface PopoverTriggerProps
    extends React.ComponentPropsWithoutRef<"button"> {}

export const Trigger: React.FC<PopoverTriggerProps> = ({ ...props }) => {
    const { popoverId } = usePopoverContext();

    return (
        <button
            id={`${popoverId}-trigger`}
            popovertarget={popoverId}
            popovertargetaction="toggle"
            {...props}
        />
    );
};

Trigger.displayName = "Popover.Trigger";

type TagType<E extends React.ElementType = React.ElementType> = Partial<
    Record<"as", E>
>;

type PopoverContentProps<E extends React.ElementType> = TagType<E> &
    Omit<React.ComponentProps<E>, keyof TagType>;

export const Content = <E extends React.ElementType = "div">({
    as,
    className,
    ...props
}: PopoverContentProps<E>) => {
    const { popoverId } = usePopoverContext();
    const TagName = as || "div";

    return (
        <TagName
            id={popoverId}
            popover="auto"
            className={`${styles.popover} ${className || ""} bg-image bg-green`}
            {...props}
        />
    );
};

interface PopoverCloseProps extends React.ComponentPropsWithoutRef<"button"> {}

export const Close: React.FC<PopoverCloseProps> = ({ className, ...props }) => {
    const { popoverId } = usePopoverContext();

    return (
        <button
            className={`popover-close-button ${className || ""}`}
            popovertarget={popoverId}
            popovertargetaction="hide"
            {...props}
        />
    );
};

Close.displayName = "Popover.Close";
