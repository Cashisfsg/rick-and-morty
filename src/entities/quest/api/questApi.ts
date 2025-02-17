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
                    return currentArg?.page !== previousArg?.page;
                },
                merge: (currentCacheData, responseData) => {
                    questEntityAdapter.setMany(
                        currentCacheData,
                        questEntitySelector.selectAll(responseData)
                    );
                },
                // providesTags: (result) => {
                //     if (!result) return ["Quest"];

                //     const allEntities = questEntitySelector.selectAll(result);

                //     console.log("All entities: ", allEntities);

                //     return [
                //         ...allEntities.map(({ id }) => ({
                //             type: "Quest" as const,
                //             id: id as number,
                //         })),
                //         "Quest",
                //     ];
                // },
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
                // invalidatesTags: (result, error) => (error ? [] : ["Quest"]),
                async onQueryStarted(_, { dispatch, queryFulfilled }) {
                    try {
                        await queryFulfilled;
                        dispatch(userApi.util.invalidateTags(["Balance"]));
                        // dispatch(
                        //     questApi.endpoints.fetchQuestList.initiate(
                        //         { page: 0, limit: 3 },
                        //         { subscribe: false, forceRefetch: true }
                        //     )
                        // );
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
