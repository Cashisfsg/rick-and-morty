import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
    initData: string | null;
}

export const userSlice = createSlice({
    name: "user",
    initialState: { initData: null } as UserState,
    reducers: {
        setUserInitData: (state, action: PayloadAction<string>) => {
            state.initData = action.payload;
        },
    },
});

export const { reducer: userReducer, actions: userActions } = userSlice;

export const { setUserInitData } = userSlice.actions;
