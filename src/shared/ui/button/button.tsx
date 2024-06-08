import "./index.css";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    forwardRef?: React.RefObject<HTMLButtonElement> | null;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    forwardRef,
    ...props
}) => {
    return (
        <button
            className={`button-base bg-image ${className || ""}`}
            ref={forwardRef}
            {...props}
        />
    );
};
