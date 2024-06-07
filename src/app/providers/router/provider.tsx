import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "@/pages/layout";

import { WalletPage } from "@/pages/wallet";
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
        element: <Layout />,
        children: [
            {
                index: true,
                element: <WalletPage />,
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
        ],
    },
]);

export const Provider = () => {
    return <RouterProvider router={router} />;
};
