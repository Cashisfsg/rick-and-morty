export interface TransactionHistoryRequest {
    page: number;
    limit: number;
}

interface Transaction {
    id: number;
    amount: number;
    user_id: number;
    type: string;
    created_at: string;
    updated_at: string;
}

export type TransactionHistoryResponse = Transaction[];
