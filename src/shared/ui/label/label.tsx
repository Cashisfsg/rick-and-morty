import styles from "./index.module.css";

interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {}

export const Label: React.FC<LabelProps> = ({ className, ...props }) => {
    return <label className={`${styles.label} ${className}`} {...props} />;
};
