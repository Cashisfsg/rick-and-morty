import type { User } from "@/entities/user";

export interface ConnectWalletRequest {
    ton_address: string;
}

export type ConnectWalletSuccessResponse = User;

export interface Wallet {
    user_id: number;
    address: string;
}

export interface DisconnectWalletResponse {
    detail: string;
}
