import { useFetchQuestListQuery, type QuestListResponse } from "../../api";
import { handleErrorResponse } from "@/shared/lib/helpers/handle-error-response";

import { Loader } from "@/shared/ui/loader";

interface FetchQuestProps {
    params: { page: number; limit: number };
    renderSuccess: (quests: QuestListResponse) => React.ReactElement;
    loadingFallback?: React.ReactNode;
    renderError?: (error: string | undefined) => React.ReactElement;
}

export const FetchQuest: React.FC<FetchQuestProps> = ({
    params = { page: 0, limit: 10 },
    renderSuccess,
    loadingFallback = <Loader />,
    renderError = (error) => <pre>{error || "Неизвестная ошибка"}</pre>,
}) => {
    const { data, isLoading, isError, error } = useFetchQuestListQuery({
        page: params.page,
        limit: params.limit,
    });

    if (isLoading) return loadingFallback;

    if (isError) return renderError(handleErrorResponse(error));

    if (data) return renderSuccess(data);

    return <></>;
};
