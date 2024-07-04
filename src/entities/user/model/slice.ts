import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../api";
import { walletApi } from "@/entities/wallet";
import { User } from "../api/types";

interface UserState {
    initData: string | null;
    user: User | null;
}

export const userSlice = createSlice({
    name: "user",
    initialState: { initData: null, user: null } as UserState,
    reducers: {
        setUserInitData: (state, action: PayloadAction<string>) => {
            state.initData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                userApi.endpoints.createUser.matchFulfilled,
                (state, { payload }) => {
                    state.user = payload;
                }
            )
            .addMatcher(
                userApi.endpoints.updateUserPhoto.matchFulfilled,
                (state, { payload }) => {
                    state.user = payload;
                }
            )
            .addMatcher(
                walletApi.endpoints.connectWallet.matchFulfilled,
                (state, { payload }) => {
                    state.user = payload;
                }
            )
            .addMatcher(
                walletApi.endpoints.disconnectWallet.matchFulfilled,
                (state) => {
                    Object.assign(state, { wallet: null });
                }
            );
    },
});

export const { reducer: userReducer, actions: userActions } = userSlice;

export const { setUserInitData } = userSlice.actions;
