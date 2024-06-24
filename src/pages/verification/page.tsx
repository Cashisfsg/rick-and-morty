import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    useCreateCaptchaMutation,
    useVerifyCaptchaMutation,
} from "@/entities/user";

import { CaptchaSlider } from "@/shared/ui/captcha-slider";

import styles from "./index.module.css";

export const VerificationPage = () => {
    const navigate = useNavigate();
    const [createCaptcha, { data, isSuccess }] = useCreateCaptchaMutation();
    const [verifyCaptcha] = useVerifyCaptchaMutation();

    useEffect(() => {
        (async () => {
            try {
                await createCaptcha({
                    x: { start: 30, end: 275 },
                    y: { start: 40, end: 215 },
                }).unwrap();
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const onSuccess = async () => {
        if (!isSuccess) return;
        try {
            await verifyCaptcha({ x: data.x, y: data.y }).unwrap();
            navigate("/app/welcome");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className={`${styles["verification-page"]} content-wrapper`}>
            <h1 className="text-blue font-secondary">
                Slide to complete the puzzle
            </h1>

            {isSuccess ? (
                <CaptchaSlider correct={data.x} onSuccess={onSuccess} />
            ) : null}
        </main>
    );
};
