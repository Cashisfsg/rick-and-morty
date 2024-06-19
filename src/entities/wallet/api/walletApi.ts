import { rootApi } from "@/app/providers/redux/api/rootApi";
import type {
    ConnectWalletRequest,
    ConnectWalletSuccessResponse,
} from "./types";

export const walletApi = rootApi.enhanceEndpoints({}).injectEndpoints({
    endpoints: (builder) => ({
        connectWallet: builder.mutation<
            ConnectWalletSuccessResponse,
            ConnectWalletRequest
        >({
            query: ({ ton_address }) => ({
                url: "/wallet/connect",
                method: "POST",
                body: {
                    ton_address: ton_address,
                },
            }),
        }),
    }),
});

export const { useConnectWalletMutation } = walletApi;
