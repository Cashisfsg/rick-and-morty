import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootStore } from "@/app/providers/redux/types";

export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers, { getState }) => {
        const initData = (getState() as RootStore).user.initData;
        if (initData) {
            headers.set("InitData", initData);
        }
        return headers;
    },
});
