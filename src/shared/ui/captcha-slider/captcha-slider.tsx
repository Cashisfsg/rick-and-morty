import { useEffect, useRef } from "react";

interface CaptchaSliderProps {
    src?: string;
}

export const CaptchaSlider: React.FC<CaptchaSliderProps> = ({
    src = "https://abrakadabra.fun/uploads/posts/2022-01/1642082451_3-abrakadabra-fun-p-oboi-rik-morti-3.jpg",
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sliderPieceRef = useRef<HTMLCanvasElement>(null);

    const params = useRef({ isDragging: false, startX: 0 });

    useEffect(() => {
        if (!canvasRef.current || !sliderPieceRef.current) return;

        const canvas = canvasRef.current;
        const sliderPieceCanvas = sliderPieceRef.current;
        const ctx = canvas.getContext("2d");
        const sliderCtx = sliderPieceCanvas.getContext("2d");

        const clipPath =
            "M4.276 40.0359L14.8387 31.9029C14.866 31.8818 14.8887 31.8571 14.9068 31.8276C15.8616 30.2763 17.8303 26.8922 18.2793 25.4138C18.7237 23.9504 20.1126 22.7353 20.7895 22.2829C20.8157 22.2653 20.8443 22.2531 20.8748 22.2456L31.2476 19.6841C31.3275 19.6643 31.3811 19.5892 31.3737 19.5071L30.1766 6.18571C30.1294 4.89427 30.7148 2.25399 33.4341 2.0244C36.8334 1.73742 38.3913 4.03331 38.9579 6.18571C39.4036 7.87928 39.9629 13.4208 40.3406 17.2434C40.3506 17.3446 40.4478 17.4121 40.5465 17.3877L43.3771 16.6887C43.4495 16.6708 43.526 16.6825 43.5899 16.7214L53.2711 22.6064C53.3542 22.6569 53.406 22.7469 53.4085 22.8451L53.5405 28.0597C53.5438 28.1914 53.463 28.3071 53.3377 28.3423C45.9453 30.4218 31.0932 34.6922 29.1851 35.6019C27.3134 36.4943 26.2708 36.2847 25.9534 36.0527C25.9357 36.0397 25.9176 36.0274 25.8981 36.0175L25.2193 35.6736L24.6486 35.3845C24.5629 35.3411 24.4613 35.3445 24.3786 35.3937L9.82878 44.0397C9.79736 44.0584 9.77012 44.0828 9.74747 44.1117C8.30724 45.949 4.67125 46.921 3.26602 44.7855C2.14023 43.0746 3.43797 40.9388 4.24192 40.0669C4.2525 40.0555 4.26366 40.0454 4.276 40.0359Z";

        const img = new Image();
        img.src = src;
        img.onload = () => {
            ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
            const path = new Path2D(clipPath);
            sliderCtx?.save();
            sliderCtx?.clip(path);

            // Draw the clipped part of the image
            sliderCtx?.drawImage(img, -20, 0, canvas.width, canvas.height);
            sliderCtx?.restore();

            // Draw the shadow
            const shadowCanvas = document.createElement("canvas");
            const shadowCtx = shadowCanvas.getContext("2d");
            shadowCanvas.width = sliderPieceCanvas.width;
            shadowCanvas.height = sliderPieceCanvas.height;

            if (!shadowCtx) return;

            shadowCtx.save();

            shadowCtx.shadowColor = "rgba(0, 255, 0, 0.5)";
            shadowCtx.shadowBlur = -7;
            shadowCtx.shadowOffsetX = 0;
            shadowCtx.shadowOffsetY = 0;
            shadowCtx.fill(path);
            // shadowCtx.drawImage(img, -20, 0, canvas.width, canvas.height);

            shadowCtx.restore();

            // Draw shadow on the main piece canvas
            sliderCtx?.drawImage(shadowCanvas, 0, 0);
        };
    }, [src, canvasRef, sliderPieceRef]);

    const onPointerDownHandler: React.PointerEventHandler<HTMLCanvasElement> = (
        event
    ) => {
        params.current = {
            isDragging: true,
            startX: event.clientX - event.currentTarget.offsetLeft,
        };
    };

    const onPointerMoveHandler: React.PointerEventHandler<HTMLCanvasElement> = (
        event
    ) => {
        if (!params.current.isDragging) return;
        requestAnimationFrame(() => {
            let x = event.clientX - params.current.startX;
            x = Math.max(
                0,
                Math.min(
                    x,
                    (canvasRef.current?.width || 0) -
                        (sliderPieceRef.current?.width || 0)
                )
            );
            sliderPieceRef.current?.style.setProperty("left", x + "px");
        });
    };

    const onPointerUpHandler: React.PointerEventHandler<
        HTMLCanvasElement
    > = () => {
        if (!params.current.isDragging) return;

        params.current.isDragging = false;
        // Check if piece is correctly positioned
        const correctX = 20; // Adjust based on actual position
        const tolerance = 5; // Allowed deviation
        const pieceX = parseFloat(sliderPieceRef.current?.style.left || "0");
        if (Math.abs(pieceX - correctX) < tolerance) {
            alert("Captcha solved!");
        } else {
            alert("Try again!");
        }
    };

    const onPointerLeaveHandler: React.PointerEventHandler<
        HTMLCanvasElement
    > = () => {
        if (!params.current.isDragging) return;

        params.current.isDragging = false;
    };

    return (
        <figure style={{ position: "relative", width: "410px" }}>
            <canvas
                id="canvas"
                width="410"
                height="300"
                ref={canvasRef}
                onPointerOutCapture={onPointerLeaveHandler}
            ></canvas>
            <canvas
                id="sliderPiece"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    cursor: "pointer",
                }}
                width="55"
                height="50"
                onPointerMove={onPointerMoveHandler}
                onPointerDown={onPointerDownHandler}
                onPointerUp={onPointerUpHandler}
                ref={sliderPieceRef}
            ></canvas>
        </figure>
    );
};
