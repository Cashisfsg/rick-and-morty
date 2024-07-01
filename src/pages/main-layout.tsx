import { Outlet } from "react-router-dom";

import Cats from "@/assets/video/cats.webm";

export const MainLayout = () => {
    return (
        <>
            <video
                autoPlay
                muted
                loop
                preload="auto"
                controls={false}
                playsInline
                className="background-video content-wrapper"
            >
                <source src={Cats} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            {/* <img
                src={Cats}
                alt="Background animation"
                className="background-video content-wrapper"
            /> */}

            <Outlet />
        </>
    );
};
