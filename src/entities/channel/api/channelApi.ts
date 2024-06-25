import { rootApi } from "@/app/providers/redux/api/rootApi";
import type {
    FetchTelegramChannelsResponse,
    VerifyTelegramChannelSubscriptionRequest,
    VerifyTelegramChannelSubscriptionResponse,
} from "./types";

export const channelApi = rootApi
    .enhanceEndpoints({
        addTagTypes: ["Channel"],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            fetchAllChannels: builder.query<
                FetchTelegramChannelsResponse,
                void
            >({
                query: () => "/tg_sub/",
                providesTags: (result) =>
                    result
                        ? [
                              ...result.map(({ id }) => ({
                                  type: "Channel" as const,
                                  id: id as number,
                              })),
                              "Channel",
                          ]
                        : ["Channel"],
            }),
            verifyChannelSubscription: builder.mutation<
                VerifyTelegramChannelSubscriptionResponse,
                VerifyTelegramChannelSubscriptionRequest
            >({
                query: ({ id }) => ({
                    url: "/tg_sub/verify",
                    method: "POST",
                    params: {
                        chat_id: id,
                    },
                }),
                invalidatesTags: (result, error) =>
                    error ? [] : result?.status ? ["Channel"] : [],
            }),
        }),
    });

export const {
    useFetchAllChannelsQuery,
    useLazyFetchAllChannelsQuery,
    useVerifyChannelSubscriptionMutation,
} = channelApi;
