import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import { MainLayout } from "@/pages/main-layout";
import { LayoutWithNavigation } from "@/pages/layout-with-navigation";
import { LayoutWithoutNavigation } from "@/pages/layout-without-navigation";

import { WelcomePage } from "@/pages/welcome";
import { AccountPage } from "@/pages/account";
import { QuestPage } from "@/pages/quest";
import { ReferralPage } from "@/pages/referral";
import { LoginPage } from "@/pages/login/page";
import { GamePage } from "@/pages/game";
import { VerificationPage } from "@/pages/verification/page";

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
                element: <LayoutWithNavigation />,
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
                element: <LayoutWithoutNavigation />,
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
]);

export const Provider = () => {
    return <RouterProvider router={router} />;
};
