export interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    is_premium: boolean;
    ref_id: number;
    wallet: Wallet;
    created_at: string;
    updated_at: string;
}

export interface Wallet {}

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
