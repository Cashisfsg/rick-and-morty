import {
    useFetchQuestListQuery,
    questEntityAdapter,
    questEntitySelector,
    type FetchQuestsRequest,
    type FetchQuestsResponse,
} from "../../api";
import { handleErrorResponse } from "@/shared/lib/helpers/handle-error-response";

import { Loader } from "@/shared/ui/loader";

interface FetchQuestProps {
    queryParams: FetchQuestsRequest;
    renderSuccess: (quests: FetchQuestsResponse) => React.ReactElement;
    loadingFallback?: React.ReactNode;
    renderError?: (error: string | undefined) => React.ReactElement;
}

export const FetchQuest: React.FC<FetchQuestProps> = ({
    queryParams,
    renderSuccess,
    loadingFallback = <Loader />,
    renderError = (error) => <pre>{error || "Unknown error"}</pre>,
}) => {
    const { data, isLoading, isSuccess, isError, error } =
        useFetchQuestListQuery(
            {
                page: queryParams.page,
                limit: queryParams.limit,
            },
            {
                selectFromResult: ({ data, ...otherParams }) => ({
                    data: questEntitySelector.selectAll(
                        data ?? questEntityAdapter.getInitialState()
                    ),
                    ...otherParams,
                }),
            }
        );

    console.error("Fetch quest error: ", handleErrorResponse(error), error);

    if (isLoading) return loadingFallback;

    if (isError) return renderError(handleErrorResponse(error));

    if (isSuccess) return renderSuccess(data);

    return <></>;
};
