import { configureStore } from "@reduxjs/toolkit";

import { rootApi } from "./api";
import { userReducer } from "@/entities/user";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [rootApi.reducerPath]: rootApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rootApi.middleware),
});
