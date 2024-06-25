export interface FetchQuestsRequest {
    page: number;
    limit: number;
}

export interface Quest {
    id: number;
    name: string;
    description: string;
    amount: number;
    url: string;
    available: boolean;
    type: string;
    is_completed: boolean;
    created_at: string;
}

export type FetchQuestsResponse = Quest[];

export interface CompleteQuestRequest {
    id: number;
}

export interface TransactionPerformer {
    id: number;
    amount: number;
    user_id: number;
    type: string;
    created_at: string;
    updated_at: string;
}

export interface TransactionParent {
    id: number;
    amount: number;
    user_id: number;
    type: string;
    created_at: string;
    updated_at: string;
}

export interface CompleteQuestResponse {
    task_id: number;
    transaction_performer: TransactionPerformer;
    transaction_parent: TransactionParent;
}
