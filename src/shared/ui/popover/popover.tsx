import { useId } from "react";

import { PopoverContext, usePopoverContext } from "./use-popover-context";

import styles from "./index.module.css";

interface PopoverRootProps extends React.PropsWithChildren {}

export const Root: React.FC<PopoverRootProps> = ({ children }) => {
    const popoverId = `popover-${useId()}`;

    return (
        <PopoverContext.Provider value={{ popoverId }}>
            {children}
        </PopoverContext.Provider>
    );
};

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
            className={`${styles.popover} ${className} bg-image bg-green`}
            {...props}
        />
    );
};

interface PopoverCloseProps extends React.ComponentPropsWithoutRef<"button"> {}

export const Close: React.FC<PopoverCloseProps> = ({ ...props }) => {
    const { popoverId } = usePopoverContext();

    return (
        <button
            popovertarget={popoverId}
            popovertargetaction="hide"
            {...props}
        />
    );
};
