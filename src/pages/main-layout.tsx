import { Outlet } from "react-router-dom";

import Cats from "@/assets/img/cats.gif";

export const MainLayout = () => {
    return (
        <>
            {/* <video
                autoPlay
                muted
                loop
                className="background-video content-wrapper"
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
