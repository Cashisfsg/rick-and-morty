import type { Wallet } from "@/entities/wallet/api";

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    is_premium: boolean;
    ref_id: number;
    wallet: Wallet | null;
    photo: string;
    is_verified: boolean;
    created_at: string;
    updated_at: string;
}

export type FetchUserInfoResponse = User;

export interface FetchUserBalanceResponse {
    tickets: number;
    balance: number;
}

export interface Referral {
    user_id: number;
    fullname: string;
    amount: number;
    photo: string;
}

export type FetchUserReferralsResponse = Referral[];

export interface UpdateUserRequest {
    isPremium?: boolean;
    photo?: string;
}

export type UpdateUserResponse = User;

export interface JoinReferralRequest {
    id: number;
}

export interface JoinReferralResponse {
    id: number;
    amount: number;
    user_id: number;
    type: string;
    created_at: string;
    updated_at: string;
}

export interface CreateCaptchaRequest {
    x: Coordinate;
    y: Coordinate;
}

interface Coordinate {
    start: number;
    end: number;
}

interface Point {
    x: number;
    y: number;
}

export type CreateCaptchaResponse = Point;

export type VerifyCaptchaRequest = Point;

export interface VerifyCaptchaResponse {
    status: boolean;
}
