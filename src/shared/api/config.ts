import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { RootStore } from "../types";
import { TelegramClient } from "./types";

const tg = (window as Window & typeof globalThis & { Telegram: TelegramClient })
    ?.Telegram?.WebApp;

const initData = tg?.initData;

alert("Tg: " + JSON.stringify(tg));

export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
        if (initData) {
            headers.set("init-data", initData);
        }
        return headers;
    },
});
