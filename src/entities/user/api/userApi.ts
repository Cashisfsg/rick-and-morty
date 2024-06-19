import { rootApi } from "@/app/providers/redux/api/rootApi";
import type { User, JoinReferralRequest, JoinReferralResponse } from "./types";

export const userApi = rootApi
    .enhanceEndpoints({
        addTagTypes: ["User"],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            fetchUserInfo: builder.query<User, void>({
                query: () => "/user/me",
                providesTags: ["User"],
            }),
            joinReferral: builder.mutation<
                JoinReferralResponse,
                JoinReferralRequest
            >({
                query: ({ id }) => ({
                    url: "/user/joined",
                    method: "POST",
                    body: {
                        referral_id: id,
                    },
                }),
            }),
        }),
    });

export const {
    useFetchUserInfoQuery,
    useLazyFetchUserInfoQuery,
    useJoinReferralMutation,
} = userApi;
