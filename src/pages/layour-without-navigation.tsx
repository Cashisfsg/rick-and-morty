import { Outlet } from "react-router-dom";

export const LayoutWithoutNavigation = () => {
    return (
        <main className="main-container content-wrapper">
            <Outlet />
        </main>
    );
};
