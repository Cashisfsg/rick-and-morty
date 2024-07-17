// import { useEffect, useRef } from "react";

import { Outlet } from "react-router-dom";

// import Cats from "@/assets/video/cats.webm";
import Cats from "@/assets/img/cats.gif";

export const MainLayout = () => {
    // const backgroundVideoRef = useRef<HTMLVideoElement>(null);

    // useEffect(() => {
    //     if (!backgroundVideoRef.current) return;

    //     backgroundVideoRef.current.play();
    // }, []);

    return (
        <>
            {/* <video
                autoPlay
                muted
                loop
                preload="auto"
                controls={false}
                playsInline
                className="background-video content-wrapper"
                ref={backgroundVideoRef}
            >
                <source src={Cats} type="video/webm" />
                Your browser does not support the video tag.
            </video> */}
            <img
                src={Cats}
                alt="Background animation"
                className="background-video content-wrapper"
            />

            <Outlet />
        </>
    );
};
