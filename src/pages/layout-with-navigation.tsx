import { Outlet } from "react-router-dom";

import { NavigationMenu } from "@/widgets/navigation-menu";

export const LayoutWithNavigation = () => {
    return (
        <main className="main-container content-wrapper">
            <Outlet />
            <NavigationMenu />
        </main>
    );
};
