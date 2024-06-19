import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/app/providers/redux/store";

import "@/app/styles/index.css";

const ReactRouterProvider = React.lazy(async () =>
    import("@/app/providers/router").then((module) => ({
        default: module.ReactRouterProvider,
    }))
);

const WalletProvider = React.lazy(async () =>
    import("@/app/providers/wallet").then((module) => ({
        default: module.WalletProvider,
    }))
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <React.Suspense>
            <ReduxProvider store={store}>
                <WalletProvider>
                    <ReactRouterProvider />
                </WalletProvider>
            </ReduxProvider>
        </React.Suspense>
    </React.StrictMode>
);
