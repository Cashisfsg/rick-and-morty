import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
} from "react-router-dom";

import { MainLayout } from "@/pages/main-layout";

import { AccountPage } from "@/pages/account";
import { TransactionPage } from "@/pages/transaction";
import { QuestPage } from "@/pages/quest";
import { ReferralPage } from "@/pages/referral";
import { LoginPage } from "@/pages/login/page";
import { GamePage } from "@/pages/game";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "app",
        element: <MainLayout />,
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
                path: "transaction",
                element: <TransactionPage />,
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
                path: "user",
                element: <h1>User page</h1>,
            },
        ],
    },
]);

export const Provider = () => {
    return <RouterProvider router={router} />;
};
