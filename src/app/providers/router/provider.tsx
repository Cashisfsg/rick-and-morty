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

const DesktopPage = lazy(async () =>
    import("@/pages/desktop").then((module) => ({
        default: module.DesktopPage,
    }))
);

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

import { LoadingPage } from "@/pages/loading";

import { TelegramClient } from "@/shared/api/types";
import { RedirectPage } from "@/pages/redirect";

const desktopRouter = createBrowserRouter([
    {
        path: "/",
        element: <DesktopPage />,
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);

const mobileRouter = createBrowserRouter([
    {
        path: "/",
        element: <RedirectPage />,
    },
    {
        path: "root",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/root/app/verify" />,
            },
            {
                path: "app",
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <LayoutWithNavigation />
                    </Suspense>
                ),
                children: [
                    {
                        index: true,
                        element: <Navigate to="/root/app/account" />,
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
                        element: <Navigate to="/root/app/account" />,
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
                        element: <Navigate to="/root/app/welcome" />,
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
    const tg = (
        window as Window & typeof globalThis & { Telegram: TelegramClient }
    )?.Telegram?.WebApp;

    const router = tg?.platform === "tdesktop" ? desktopRouter : mobileRouter;

    return <RouterProvider router={mobileRouter} />;
};
