import { useNavigate } from "react-router-dom";

import { CaptchaSlider } from "@/shared/ui/captcha-slider";

export const VerificationPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1
                className="text-blue font-secondary"
                style={{ alignSelf: "end" }}
            >
                Slide to complete the puzzle
            </h1>

            <CaptchaSlider onSuccess={() => navigate("/app/welcome")} />
        </>
    );
};
