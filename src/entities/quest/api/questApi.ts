import { rootApi } from "@/app/providers/redux/api/rootApi";
import type {
    QuestListRequest,
    QuestListResponse,
    CompleteQuestRequest,
    CompleteQuestResponse,
} from "./types";

export const questApi = rootApi
    .enhanceEndpoints({
        addTagTypes: ["Quest"],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            fetchQuestList: builder.query<QuestListResponse, QuestListRequest>({
                query: ({ page = 0, limit = 10 }) => ({
                    url: "/task/",
                    params: { page, limit },
                }),
                providesTags: (result) =>
                    result
                        ? [
                              ...result.map(({ id }) => ({
                                  type: "Quest" as const,
                                  id: id as number,
                              })),
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
            }),
        }),
    });

export const {
    useFetchQuestListQuery,
    useLazyFetchQuestListQuery,
    useCompleteQuestMutation,
} = questApi;
