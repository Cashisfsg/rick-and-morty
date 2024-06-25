import { rootApi } from "@/app/providers/redux/api/rootApi";
import type {
    ConnectWalletRequest,
    ConnectWalletSuccessResponse,
    DisconnectWalletResponse,
} from "./types";

import { userApi } from "@/entities/user";

export const walletApi = rootApi.enhanceEndpoints({}).injectEndpoints({
    endpoints: (builder) => ({
        connectWallet: builder.mutation<
            ConnectWalletSuccessResponse,
            ConnectWalletRequest
        >({
            query: ({ ton_address }) => ({
                url: `/wallet/connect?ton_address=${ton_address}`,
                method: "POST",
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(userApi.util.invalidateTags(["User"]));
                } catch {}
            },
        }),
        disconnectWallet: builder.mutation<DisconnectWalletResponse, void>({
            query: () => ({
                url: "/wallet/disconnect",
                method: "POST",
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(userApi.util.invalidateTags(["User"]));
                } catch {}
            },
        }),
    }),
});

export const { useConnectWalletMutation, useDisconnectWalletMutation } =
    walletApi;
