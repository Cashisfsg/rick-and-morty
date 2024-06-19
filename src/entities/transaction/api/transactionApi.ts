import { rootApi } from "@/app/providers/redux/api/rootApi";
import type {
    TransactionHistoryRequest,
    TransactionHistoryResponse,
} from "./types";

export const transactionApi = rootApi
    .enhanceEndpoints({
        addTagTypes: ["Transaction"],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            fetchTransactionHistory: builder.query<
                TransactionHistoryResponse,
                TransactionHistoryRequest
            >({
                query: ({ page = 0, limit = 10 }) => ({
                    url: "/transactions/me",
                    params: { page, limit },
                }),
                providesTags: (result) =>
                    result
                        ? [
                              ...result.map(({ id }) => ({
                                  type: "Transaction" as const,
                                  id: id as number,
                              })),
                              "Transaction",
                          ]
                        : ["Transaction"],
            }),
        }),
    });

export const {
    useFetchTransactionHistoryQuery,
    useLazyFetchTransactionHistoryQuery,
} = transactionApi;
