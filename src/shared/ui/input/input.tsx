import styles from "./index.module.css";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return (
        <input
            type="text"
            className={`${styles.input} ${className}`}
            {...props}
        />
    );
};
