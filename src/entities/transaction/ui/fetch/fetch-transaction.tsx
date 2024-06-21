import {
    useFetchTransactionHistoryQuery,
    type TransactionHistoryResponse,
} from "../../api";
import { handleErrorResponse } from "@/shared/lib/helpers/handle-error-response";

import { Loader } from "@/shared/ui/loader";

interface FetchQuestProps {
    params: { page: number; limit: number };
    renderSuccess: (quests: TransactionHistoryResponse) => React.ReactElement;
    loadingFallback?: React.ReactNode;
    renderError?: (error: string | undefined) => React.ReactElement;
}

export const FetchTransaction: React.FC<FetchQuestProps> = ({
    params,
    renderSuccess,
    loadingFallback = <Loader />,
    renderError = (error) => <pre>{error || "Unknown error"}</pre>,
}) => {
    const { data, isLoading, isError, error } = useFetchTransactionHistoryQuery(
        {
            page: params.page,
            limit: params.limit,
        }
    );

    console.log("Fetch transaction error: ", handleErrorResponse(error), error);

    if (isLoading) return loadingFallback;

    if (isError) return renderError(handleErrorResponse(error));

    if (data) return renderSuccess(data);

    return <></>;
};
