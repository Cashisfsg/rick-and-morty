import { rootApi } from "@/app/providers/redux/api/rootApi";
import type {
    // FetchUserInfoResponse,
    FetchUserBalanceResponse,
    FetchUserReferralsResponse,
    // UpdatePremiumStatusRequest,
    // UpdatePremiumStatusResponse,
    CreateUserRequest,
    CreateUserResponse,
    UpdateUserPhotoRequest,
    UpdateUserPhotoResponse,
    // JoinReferralRequest,
    // JoinReferralResponse,
    CreateCaptchaRequest,
    CreateCaptchaResponse,
    VerifyCaptchaRequest,
    VerifyCaptchaResponse,
} from "./types";

export const userApi = rootApi
    .enhanceEndpoints({
        addTagTypes: ["Balance", "Referral"],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            // fetchUserInfo: builder.query<FetchUserInfoResponse, void>({
            //     query: () => "/user/me",
            //     providesTags: ["User"],
            // }),
            fetchUserBalance: builder.query<FetchUserBalanceResponse, void>({
                query: () => "/user/balance",
                providesTags: ["Balance"],
            }),
            fetchUserReferrals: builder.query<FetchUserReferralsResponse, void>(
                {
                    query: () => "/user/referrals",
                    providesTags: (result) =>
                        result
                            ? [
                                  ...result.map(({ user_id }) => ({
                                      type: "Referral" as const,
                                      id: user_id as number,
                                  })),
                                  "Referral",
                              ]
                            : ["Referral"],
                }
            ),
            // updatePremiumStatus: builder.mutation<
            //     UpdatePremiumStatusResponse,
            //     UpdatePremiumStatusRequest
            // >({
            //     query: ({ isPremium }) => ({
            //         url: "/user/",
            //         method: "POST",
            //         body: {
            //             is_premium: isPremium,
            //         },
            //     }),
            //     invalidatesTags: (result, error) => (error ? [] : ["User"]),
            // }),
            createUser: builder.mutation<CreateUserResponse, CreateUserRequest>(
                {
                    query: ({ isPremium, referralId }) => ({
                        url: "/user/create",
                        method: "POST",
                        body: {
                            is_premium: isPremium,
                            referral_id: referralId,
                        },
                    }),
                }
            ),
            updateUserPhoto: builder.mutation<
                UpdateUserPhotoResponse,
                UpdateUserPhotoRequest
            >({
                query: ({ photo }) => ({
                    url: "/user/",
                    method: "POST",
                    body: {
                        photo: photo,
                    },
                }),
            }),
            // joinReferral: builder.mutation<
            //     JoinReferralResponse,
            //     JoinReferralRequest
            // >({
            //     query: ({ id }) => ({
            //         url: "/user/joined",
            //         method: "POST",
            //         params: {
            //             referral_id: id,
            //         },
            //     }),
            //     invalidatesTags: (result, error) =>
            //         error ? [] : ["Referral", "Balance"],
            // }),
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
    // useFetchUserInfoQuery,
    // useLazyFetchUserInfoQuery,
    useFetchUserBalanceQuery,
    useLazyFetchUserBalanceQuery,
    useFetchUserReferralsQuery,
    useLazyFetchUserReferralsQuery,
    useCreateUserMutation,
    useUpdateUserPhotoMutation,
    useCreateCaptchaMutation,
    useVerifyCaptchaMutation,
} = userApi;
