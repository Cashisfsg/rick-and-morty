import "./index.css";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    className?: "button-pink" | "button-green" | "button-blue" | string;
}

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
    return <button className={`button-base ${className}`} {...props} />;
};
