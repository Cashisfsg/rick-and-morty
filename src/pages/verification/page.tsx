import { useNavigate } from "react-router-dom";

import { CaptchaSlider } from "@/shared/ui/captcha-slider";

import styles from "./index.module.css";

export const VerificationPage = () => {
    const navigate = useNavigate();

    return (
        <main className={`${styles["verification-page"]} content-wrapper`}>
            <h1 className="text-blue font-secondary">
                Slide to complete the puzzle
            </h1>

            <CaptchaSlider onSuccess={() => navigate("/app/welcome")} />
        </main>
    );
};
