import { useRef } from "react";

import { useUpdateUserMutation } from "@/entities/user";

import { Avatar } from "@/entities/user/ui/avatar/avatar";
import { Button } from "@/shared/ui/button";

// import { useAccountPopoverContext } from "@/widgets/account-popover/ui/use-account-popover-context";

// import Avatar1 from "@/assets/img/avatars/avatar-1.png";
// import Avatar2 from "@/assets/img/avatars/avatar-2.png";
// import Avatar3 from "@/assets/img/avatars/avatar-3.png";
// import Avatar4 from "@/assets/img/avatars/avatar-4.png";
// import Avatar5 from "@/assets/img/avatars/avatar-5.png";
// import Avatar6 from "@/assets/img/avatars/avatar-6.png";
// import Avatar7 from "@/assets/img/avatars/avatar-7.png";
// import Avatar8 from "@/assets/img/avatars/avatar-8.png";
// import Avatar9 from "@/assets/img/avatars/avatar-9.png";
// import Avatar10 from "@/assets/img/avatars/avatar-10.png";
// import Avatar11 from "@/assets/img/avatars/avatar-11.png";
// import Avatar12 from "@/assets/img/avatars/avatar-12.png";
// import Avatar13 from "@/assets/img/avatars/avatar-13.png";
// import Avatar14 from "@/assets/img/avatars/avatar-14.png";
// import Avatar15 from "@/assets/img/avatars/avatar-15.png";
// import Avatar16 from "@/assets/img/avatars/avatar-16.png";
// import Avatar17 from "@/assets/img/avatars/avatar-17.png";
// import Avatar18 from "@/assets/img/avatars/avatar-18.png";
// import Avatar19 from "@/assets/img/avatars/avatar-19.png";
// import Avatar20 from "@/assets/img/avatars/avatar-20.png";
// import Avatar21 from "@/assets/img/avatars/avatar-21.png";
// import Avatar22 from "@/assets/img/avatars/avatar-22.png";
// import Avatar23 from "@/assets/img/avatars/avatar-23.png";
// import Avatar24 from "@/assets/img/avatars/avatar-24.png";
// import Avatar25 from "@/assets/img/avatars/avatar-25.png";
// import Avatar26 from "@/assets/img/avatars/avatar-26.png";
// import Avatar27 from "@/assets/img/avatars/avatar-27.png";
// import Avatar28 from "@/assets/img/avatars/avatar-28.png";
// import Avatar29 from "@/assets/img/avatars/avatar-29.png";
// import Avatar30 from "@/assets/img/avatars/avatar-30.png";
// import Avatar31 from "@/assets/img/avatars/avatar-31.png";
// import Avatar32 from "@/assets/img/avatars/avatar-32.png";
// import Avatar33 from "@/assets/img/avatars/avatar-33.png";
// import Avatar34 from "@/assets/img/avatars/avatar-34.png";
// import Avatar35 from "@/assets/img/avatars/avatar-35.png";

import styles from "./index.module.css";

// const avatars = [
//     Avatar1,
//     Avatar2,
//     Avatar3,
//     Avatar4,
//     Avatar5,
//     Avatar6,
//     Avatar7,
//     Avatar8,
//     Avatar9,
//     Avatar10,
//     Avatar11,
//     Avatar12,
//     Avatar13,
//     Avatar14,
//     Avatar15,
//     Avatar16,
//     Avatar17,
//     Avatar18,
//     Avatar19,
//     Avatar20,
//     Avatar21,
//     Avatar22,
//     Avatar23,
//     Avatar24,
//     Avatar25,
//     Avatar26,
//     Avatar27,
//     Avatar28,
//     Avatar29,
//     Avatar30,
//     Avatar31,
//     Avatar32,
//     Avatar33,
//     Avatar34,
//     Avatar35,
// ];

interface FormField {
    avatar: HTMLInputElement;
}

interface ProfileImageEditorFormProps
    extends React.ComponentPropsWithoutRef<"form"> {}

export const ProfileImageEditorForm: React.FC<ProfileImageEditorFormProps> = ({
    className = "",
    ...props
}) => {
    // const { avatarImage, setAvatarImage } = useAccountPopoverContext();

    // const { data: user } = useFetchUserInfoQuery();
    const [updateUser] = useUpdateUserMutation();

    // const avatarRef = useRef<HTMLImageElement>(null);
    const submitButtonRef = useRef<HTMLButtonElement>(null);

    const onAvatarChange: React.FormEventHandler<HTMLFormElement> = (event) => {
        const target = (event.target as HTMLElement).closest(
            "input[type='radio']"
        );

        if (!target) return;

        submitButtonRef.current?.removeAttribute("disabled");
    };

    const onSubmitHandler: React.FormEventHandler<
        HTMLFormElement & FormField
    > = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        const { avatar } = event.currentTarget;

        // setAvatarImage(avatar.value);
        try {
            await updateUser({ photo: avatar.value }).unwrap();
            form.reset();
            submitButtonRef.current?.setAttribute("disabled", "");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form
            onSubmit={onSubmitHandler}
            onChange={onAvatarChange}
            className={`${styles["profile-image-editor"]} ${className}`}
            {...props}
        >
            <Avatar
                // src={`${import.meta.env.VITE_BASE_API_URL}/media/${user?.photo}`}
                size="large"
                // forwardRef={avatarRef}
                className="border-green shadow-green"
            />

            <div>
                <fieldset>
                    {Array.from({ length: 35 }, (_, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                name="avatar"
                                value={`avatar-${index + 1}.png`}
                            />
                            <Avatar
                                src={`${import.meta.env.VITE_BASE_API_URL}/media/avatar-${index + 1}.png`}
                            />
                        </label>
                    ))}
                </fieldset>
            </div>

            <Button
                disabled
                forwardRef={submitButtonRef}
                className="button-pink font-secondary"
            >
                Save
            </Button>
        </form>
    );
};
