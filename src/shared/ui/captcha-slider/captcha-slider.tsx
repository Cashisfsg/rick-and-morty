import { useEffect, useRef, useReducer, useCallback } from "react";

import { Hologram } from "./hologram";

import { Refresh } from "@/assets/icons";

import styles from "./index.module.css";

interface CaptchaSliderProps {
    src?: string;
    correct: number | undefined;
    onSuccess?: () => unknown;
}

// const CORRECT = 20;
const TRANSLATE_VERTICAL = Math.round(Math.random() * 250);
const TRANSLATE_HORIZONTAL = Math.round(Math.random() * 250);
const TOLERANCE = 5;

export const CaptchaSlider: React.FC<CaptchaSliderProps> = ({
    // src = "https://abrakadabra.fun/uploads/posts/2022-01/1642082451_3-abrakadabra-fun-p-oboi-rik-morti-3.jpg",
    src = "https://kartinki.pics/uploads/posts/2022-03/thumbs/1647923157_12-kartinkin-net-p-rik-i-morti-kartinki-v-khoroshem-kachestve-13.jpg",
    correct,
    onSuccess,
}) => {
    const [state, rerender] = useReducer((state) => !state, false);
    const srcArray = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vWmOxXJrbSVzhvx6qx4BWLfftnvNG8LkyLRcEJYC7ob1N5jZ3KH7EVBlGH4ZTMsFSqA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgYPWrhSZ9OGdDG2B05VuKyVnC0lcjPVhzKRPdxCL70UWJV-vPvCTJeC6yDhTUV3RR2I&usqp=CAU",
        "https://i.ytimg.com/vi/Q0gWRJW8H5w/maxresdefault.jpg",
    ];

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sliderPieceRef = useRef<HTMLCanvasElement>(null);
    const image = useRef<HTMLImageElement>(new Image());

    console.log("Correct: ", correct);

    useEffect(() => {
        if (
            !canvasRef.current ||
            !sliderPieceRef.current ||
            correct === undefined
        )
            return;

        const canvas = canvasRef.current;
        const sliderPieceCanvas = sliderPieceRef.current;
        const ctx = canvas.getContext("2d");
        const sliderCtx = sliderPieceCanvas.getContext("2d");

        const clipPath =
            "M4.276 40.0359L14.8387 31.9029C14.866 31.8818 14.8887 31.8571 14.9068 31.8276C15.8616 30.2763 17.8303 26.8922 18.2793 25.4138C18.7237 23.9504 20.1126 22.7353 20.7895 22.2829C20.8157 22.2653 20.8443 22.2531 20.8748 22.2456L31.2476 19.6841C31.3275 19.6643 31.3811 19.5892 31.3737 19.5071L30.1766 6.18571C30.1294 4.89427 30.7148 2.25399 33.4341 2.0244C36.8334 1.73742 38.3913 4.03331 38.9579 6.18571C39.4036 7.87928 39.9629 13.4208 40.3406 17.2434C40.3506 17.3446 40.4478 17.4121 40.5465 17.3877L43.3771 16.6887C43.4495 16.6708 43.526 16.6825 43.5899 16.7214L53.2711 22.6064C53.3542 22.6569 53.406 22.7469 53.4085 22.8451L53.5405 28.0597C53.5438 28.1914 53.463 28.3071 53.3377 28.3423C45.9453 30.4218 31.0932 34.6922 29.1851 35.6019C27.3134 36.4943 26.2708 36.2847 25.9534 36.0527C25.9357 36.0397 25.9176 36.0274 25.8981 36.0175L25.2193 35.6736L24.6486 35.3845C24.5629 35.3411 24.4613 35.3445 24.3786 35.3937L9.82878 44.0397C9.79736 44.0584 9.77012 44.0828 9.74747 44.1117C8.30724 45.949 4.67125 46.921 3.26602 44.7855C2.14023 43.0746 3.43797 40.9388 4.24192 40.0669C4.2525 40.0555 4.26366 40.0454 4.276 40.0359Z";

        const img = image.current;
        img.src = srcArray[Math.round(Math.random() * 2)];
        img.onload = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            if (!ctx || !sliderCtx) return;

            const canvasAspect = canvas.width / canvas.height;
            const imgAspect = img.width / img.height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasAspect > imgAspect) {
                // Если канвас шире изображения
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgAspect;
                offsetX = 0;
                offsetY = -(drawHeight - canvas.height) / 2;
            } else {
                // Если канвас выше изображения
                drawWidth = canvas.height * imgAspect;
                drawHeight = canvas.height;
                offsetX = -(drawWidth - canvas.width) / 2;
                offsetY = 0;
            }

            // Отрисовка основного изображения на основном канвасе
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

            const path = new Path2D(clipPath);

            // Добавление тени к вырезанному фрагменту
            sliderCtx.save();

            // Установите параметры тени
            sliderCtx.shadowColor = "rgba(0, 255, 0, 0.5)";
            sliderCtx.shadowBlur = 10;
            sliderCtx.shadowOffsetX = 0;
            sliderCtx.shadowOffsetY = 0;

            // Заливка тени по контуру
            sliderCtx.fill(path);

            // Перерисуйте вырезанный фрагмент поверх тени
            sliderCtx.clip(path);
            sliderCtx.drawImage(
                img,
                -correct - TRANSLATE_HORIZONTAL + offsetX,
                -TRANSLATE_VERTICAL - offsetY,
                drawWidth,
                drawHeight
            );

            sliderCtx.restore();

            // Создание полупрозрачного черного фона поверх вырезанного фрагмента
            ctx.save();

            ctx.translate(correct + TRANSLATE_HORIZONTAL, TRANSLATE_VERTICAL); // Сдвиг фрагмента
            ctx.globalAlpha = 0.7; // Установка прозрачности
            // ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; // Установка цвета фона
            ctx.clip(path); // Применение клиппинга
            ctx.fill(path); // Заливка полупрозрачным фоном

            ctx.restore();
        };
    }, [src, canvasRef, sliderPieceRef, state, correct]);

    const handler = useCallback((event: Event) => {
        console.log("Handler. Correct: ", correct);

        if (correct === undefined) return;
        event.stopPropagation();

        const correctX = correct; // Adjust based on actual position
        const pieceX = parseFloat(sliderPieceRef.current?.style.left || "0");

        if (!canvasRef.current || !sliderPieceRef.current) return;

        if (Math.abs(pieceX - correctX - TRANSLATE_HORIZONTAL) > TOLERANCE)
            return;

        const canvas = canvasRef.current;
        const sliderPieceCanvas = sliderPieceRef.current;
        const ctx = canvas.getContext("2d");

        const img = image.current;

        // Отрисовка основного изображения на основном канвасе
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
            // Если канвас шире изображения
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgAspect;
            offsetX = 0;
            offsetY = -(drawHeight - canvas.height) / 2;
        } else {
            // Если канвас выше изображения
            drawWidth = canvas.height * imgAspect;
            drawHeight = canvas.height;
            offsetX = -(drawWidth - canvas.width) / 2;
            offsetY = 0;
        }

        ctx?.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        sliderPieceCanvas?.style.setProperty("display", "none");
        // alert("Captcha solved!");
        document.removeEventListener("touchend", handler);
        onSuccess?.();
    }, []);

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        event.stopPropagation();

        requestAnimationFrame(() => {
            const x = Math.max(
                0,
                Math.min(
                    (((canvasRef.current?.width || 0) -
                        (sliderPieceRef.current?.width || 0)) /
                        100) *
                        Number(event.target.value),
                    (canvasRef.current?.width || 0) -
                        (sliderPieceRef.current?.width || 0)
                )
            );
            sliderPieceRef.current?.style.setProperty("left", x + "px");
        });
    };

    const onPointerUpHandler: React.PointerEventHandler<HTMLInputElement> = (
        event
    ) => {
        handler(event);
    };

    const onTouchStartHandler: React.TouchEventHandler<
        HTMLInputElement
    > = () => {
        document.removeEventListener("touchend", handler);
        document.addEventListener("touchend", handler);
    };

    return (
        <figure>
            <Hologram>
                <button className={styles["refresh-button"]} onClick={rerender}>
                    <Refresh className="text-green" />
                </button>
                <canvas
                    id="canvas"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: -1,
                    }}
                    ref={canvasRef}
                />
                <canvas
                    id="sliderPiece"
                    style={{
                        position: "absolute",
                        top: TRANSLATE_VERTICAL,
                        left: Math.round(30 + Math.random() * 245),
                        cursor: "pointer",
                        zIndex: 1,
                    }}
                    width="57"
                    height="50"
                    ref={sliderPieceRef}
                />
            </Hologram>

            <div className={styles.slider}>
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    defaultValue={
                        (sliderPieceRef.current?.offsetLeft || 0) /
                        ((canvasRef.current?.width || 2) -
                            (sliderPieceRef.current?.width || 1))
                    }
                    onChange={onChangeHandler}
                    onTouchStart={onTouchStartHandler}
                    onPointerUp={onPointerUpHandler}
                    className={`${styles["input-range"]} bg-blue border-blue shadow-blue rounded-full`}
                />
            </div>
        </figure>
    );
};
