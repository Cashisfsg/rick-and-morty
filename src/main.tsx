import React from "react";
import ReactDOM from "react-dom/client";
import { WalletProvider } from "./app/providers/wallet";

import "@/app/styles/index.css";

const ReactRouterProvider = React.lazy(async () =>
    import("@/app/providers/router").then((module) => ({
        default: module.ReactRouterProvider,
    }))
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <React.Suspense>
            <WalletProvider>
                <ReactRouterProvider />
            </WalletProvider>
        </React.Suspense>
    </React.StrictMode>
);
