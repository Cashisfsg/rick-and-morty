import styles from "./index.module.css";

interface AvatarProps extends React.ComponentPropsWithoutRef<"img"> {
    size?: "small" | "large";
    forwardRef?: React.RefObject<HTMLImageElement> | null;
}

export const Avatar: React.FC<AvatarProps> = ({
    className,
    size = "small",
    forwardRef,
    ...props
}) => {
    const imageSize = {
        small: 40,
        large: 80,
    };

    return (
        <img
            src=""
            alt="Avatar"
            loading="lazy"
            height={imageSize[size]}
            width={imageSize[size]}
            className={`${styles.avatar} ${className || ""}`}
            ref={forwardRef}
            {...props}
        />
    );
};
