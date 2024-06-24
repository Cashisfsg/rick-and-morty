import { rootApi } from "@/app/providers/redux/api/rootApi";
import type {
    FetchUserInfoResponse,
    FetchUserReferralsResponse,
    UpdatePremiumStatusRequest,
    UpdatePremiumStatusResponse,
    JoinReferralRequest,
    JoinReferralResponse,
    CreateCaptchaRequest,
    CreateCaptchaResponse,
    VerifyCaptchaRequest,
    VerifyCaptchaResponse,
} from "./types";

export const userApi = rootApi
    .enhanceEndpoints({
        addTagTypes: ["User", "Referral"],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            fetchUserInfo: builder.query<FetchUserInfoResponse, void>({
                query: () => "/user/me",
                providesTags: ["User"],
            }),
            fetchUserReferrals: builder.query<FetchUserReferralsResponse, void>(
                {
                    query: () => "/user/referrals",
                    providesTags: (result) =>
                        result
                            ? [
                                  ...result.map(({ id }) => ({
                                      type: "Referral" as const,
                                      id: id as number,
                                  })),
                                  "Referral",
                              ]
                            : ["Referral"],
                }
            ),
            updatePremiumStatus: builder.mutation<
                UpdatePremiumStatusResponse,
                UpdatePremiumStatusRequest
            >({
                query: ({ isPremium }) => ({
                    url: "/user/",
                    method: "POST",
                    body: {
                        is_premium: isPremium,
                    },
                }),
            }),
            joinReferral: builder.mutation<
                JoinReferralResponse,
                JoinReferralRequest
            >({
                query: ({ id }) => ({
                    url: `/user/joined?referral_id=${id}`,
                    method: "POST",
                }),
                invalidatesTags: (result, error, arg) =>
                    error ? [] : [{ type: "Referral", id: arg.id }],
            }),
            createCaptcha: builder.mutation<
                CreateCaptchaResponse,
                CreateCaptchaRequest
            >({
                query: (coordinate) => ({
                    url: "/captcha/create",
                    method: "POST",
                    body: coordinate,
                }),
            }),
            verifyCaptcha: builder.mutation<
                VerifyCaptchaResponse,
                VerifyCaptchaRequest
            >({
                query: (point) => ({
                    url: "/captcha/verify",
                    method: "POST",
                    body: point,
                }),
            }),
        }),
    });

export const {
    useFetchUserInfoQuery,
    useLazyFetchUserInfoQuery,
    useFetchUserReferralsQuery,
    useLazyFetchUserReferralsQuery,
    useUpdatePremiumStatusMutation,
    useJoinReferralMutation,
    useCreateCaptchaMutation,
    useVerifyCaptchaMutation,
} = userApi;
