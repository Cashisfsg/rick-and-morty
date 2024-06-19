import { rootApi } from "@/app/providers/redux/api/rootApi";
import type { User } from "./types";

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
            joinReferral: builder.mutation<unknown, { referral_id: string }>({
                query: ({ referral_id }) => ({
                    url: "/user/joined",
                    method: "POST",
                    body: {
                        referral_id: referral_id,
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
