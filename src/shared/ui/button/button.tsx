import "./index.css";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
    return (
        <button
            className={`button-base bg-image ${className || ""}`}
            {...props}
        />
    );
};
