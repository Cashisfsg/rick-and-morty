import { Outlet } from "react-router-dom";

import { NavigationMenu } from "@/widgets/navigation-menu";

import Cats from "@/assets/video/cats.mp4";

export const Layout = () => {
    return (
        <>
            <video autoPlay muted loop className="background-video">
                <source src={Cats} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <main className="main-container">
                <Outlet />
                <NavigationMenu />
            </main>
        </>
    );
};
