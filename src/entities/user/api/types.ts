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
