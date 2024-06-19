export interface ConnectWalletRequest {
    ton_address: string;
}

export interface ConnectWalletSuccessResponse {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    is_premium: boolean;
    ref_id: number;
    wallet: Wallet;
}

export interface Wallet {}
