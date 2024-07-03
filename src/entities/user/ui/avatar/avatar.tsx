import { composeEventHandlers } from "@/shared/lib/compose-event-handlers";

import { useFetchUserInfoQuery } from "../../api";

import AvatarImage from "@/assets/img/avatars/avatar-1.png";

import styles from "./index.module.css";

interface AvatarProps extends React.ComponentPropsWithoutRef<"img"> {
    size?: "small" | "large";

    forwardRef?: React.RefObject<HTMLImageElement> | null;
}

export const Avatar: React.FC<AvatarProps> = ({
    className = "",
    src,
    size = "small",
    height,
    width,
    onError,
    forwardRef,
    ...props
}) => {
    const { data: user } = useFetchUserInfoQuery();

    const imageSize = {
        small: 40,
        large: 80,
    };

    const onErrorHandler: React.ReactEventHandler<HTMLImageElement> = (
        event
    ) => {
        event.currentTarget.setAttribute("src", AvatarImage);
    };

    return (
        <img
            src={
                src ||
                `${import.meta.env.VITE_BASE_API_URL}/media/${user?.photo}`
            }
            alt="Avatar"
            loading="lazy"
            height={height || imageSize[size]}
            width={width || imageSize[size]}
            onError={composeEventHandlers(onError, onErrorHandler)}
            className={`${styles.avatar} ${className}`}
            ref={forwardRef}
            {...props}
        />
    );
};
