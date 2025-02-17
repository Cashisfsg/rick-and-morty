export interface TelegramChannel {
    id: number;
    title: string;
    url: string;
    photo: string;
}

export type FetchTelegramChannelsResponse = TelegramChannel[];

export interface VerifyTelegramChannelSubscriptionRequest {
    id: number;
}

export interface VerifyTelegramChannelSubscriptionResponse {
    status: boolean;
}
