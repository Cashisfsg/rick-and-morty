import { Outlet } from "react-router-dom";

import Cats from "@/assets/video/cats.mp4";

export const MainLayout = () => {
    return (
        <>
            <video
                autoPlay
                muted
                loop
                className="background-video content-wrapper"
            >
                <source src={Cats} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Outlet />
        </>
    );
};
