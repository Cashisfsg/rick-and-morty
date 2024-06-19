import { lazy, Suspense } from "react";

import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
} from "react-router-dom";

import { MainLayout } from "@/pages/main-layout";
import { LayoutWithNavigation } from "@/pages/layout-with-navigation";
// import { LayoutWithoutNavigation } from "@/pages/layout-without-navigation";

import { LoginPage } from "@/pages/login";

const WelcomePage = lazy(async () =>
    import("@/pages/welcome").then((module) => ({
        default: module.WelcomePage,
    }))
);

const AccountPage = lazy(async () =>
    import("@/pages/account").then((module) => ({
        default: module.AccountPage,
    }))
);

const QuestPage = lazy(async () =>
    import("@/pages/quest").then((module) => ({
        default: module.QuestPage,
    }))
);

const ReferralPage = lazy(async () =>
    import("@/pages/referral").then((module) => ({
        default: module.ReferralPage,
    }))
);

import { GamePage } from "@/pages/game";
import { VerificationPage } from "@/pages/verification/page";

import { Loader } from "@/shared/ui/loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "app",
                element: (
                    <Suspense fallback={<Loader />}>
                        <LayoutWithNavigation />
                    </Suspense>
                ),
                children: [
                    {
                        index: true,
                        element: <Navigate to="/app/account" />,
                    },
                    {
                        path: "account",
                        element: <AccountPage />,
                    },
                    {
                        path: "game",
                        element: <GamePage />,
                    },
                    {
                        path: "quest",
                        element: <QuestPage />,
                    },
                    {
                        path: "referral",
                        element: <ReferralPage />,
                    },
                    {
                        path: "*",
                        element: <Navigate to="/app/account" />,
                    },
                ],
            },
            {
                path: "app",
                element: <Outlet />,
                children: [
                    {
                        path: "verify",
                        element: <VerificationPage />,
                    },
                    {
                        path: "welcome",
                        element: <WelcomePage />,
                    },
                    {
                        path: "*",
                        element: <Navigate to="/app/welcome" />,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);

export const Provider = () => {
    return <RouterProvider router={router} />;
};
