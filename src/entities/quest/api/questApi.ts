import { EntityState, createEntityAdapter } from "@reduxjs/toolkit";

import { rootApi } from "@/app/providers/redux/api/rootApi";
import { userApi } from "@/entities/user";
import type {
    Quest,
    FetchQuestsRequest,
    CompleteQuestRequest,
    CompleteQuestResponse,
} from "./types";

export const questEntityAdapter = createEntityAdapter({
    selectId: (quest: Quest) => quest.id,
});

export const questEntitySelector = questEntityAdapter.getSelectors();

export const questApi = rootApi
    .enhanceEndpoints({
        addTagTypes: ["Quest"],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            fetchQuestList: builder.query<
                EntityState<Quest, number>,
                FetchQuestsRequest
            >({
                query: ({ page, limit }) => ({
                    url: "/task/",
                    params: { page, limit },
                }),
                transformResponse: (response: Quest[]) => {
                    return questEntityAdapter.addMany(
                        questEntityAdapter.getInitialState(),
                        response
                    );
                },
                serializeQueryArgs: ({ endpointName }) => {
                    return endpointName;
                },
                forceRefetch: ({ currentArg, previousArg }) => {
                    return currentArg?.limit !== previousArg?.limit;
                },
                merge: (currentCacheData, responseData) => {
                    questEntityAdapter.setMany(
                        currentCacheData,
                        questEntitySelector.selectAll(responseData)
                    );
                },
                providesTags: (result) =>
                    result
                        ? [
                              ...Object.values(result.entities).map(
                                  ({ id }) => ({
                                      type: "Quest" as const,
                                      id: id as number,
                                  })
                              ),
                              "Quest",
                          ]
                        : ["Quest"],
            }),
            completeQuest: builder.mutation<
                CompleteQuestResponse,
                CompleteQuestRequest
            >({
                query: ({ id }) => ({
                    url: `/task/${id}`,
                    method: "POST",
                    body: {
                        task_id: id,
                    },
                }),
                invalidatesTags: (result, error, arg) =>
                    error ? [] : [{ type: "Quest", id: arg.id }],
                async onQueryStarted(_, { dispatch, queryFulfilled }) {
                    try {
                        await queryFulfilled;
                        dispatch(userApi.util.invalidateTags(["User"]));
                    } catch {}
                },
            }),
        }),
    });

export const {
    useFetchQuestListQuery,
    useLazyFetchQuestListQuery,
    useCompleteQuestMutation,
} = questApi;
