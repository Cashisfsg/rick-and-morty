import React from "react";
import ReactDOM from "react-dom/client";

import "@/app/styles/index.css";

const ReactRouterProvider = React.lazy(async () =>
    import("@/app/providers/router").then((module) => ({
        default: module.ReactRouterProvider,
    }))
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ReactRouterProvider />
    </React.StrictMode>
);
