import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootStore } from "@/app/providers/redux/types";
// import { TelegramClient } from "./types";

// const tg = (window as Window & typeof globalThis & { Telegram: TelegramClient })
//     ?.Telegram?.WebApp;

// const initData = tg?.initData;

export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const initData = (getState() as RootStore).user.initData;
        if (initData) {
            headers.set("init-data", initData);
        }
        return headers;
    },
});
