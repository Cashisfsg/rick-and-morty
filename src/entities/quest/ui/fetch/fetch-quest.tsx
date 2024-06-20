import { useFetchQuestListQuery, type QuestListResponse } from "../../api";
import { handleErrorResponse } from "@/shared/lib/helpers/handle-error-response";

import { Loader } from "@/shared/ui/loader";

interface FetchQuestProps {
    renderSuccess: (quests: QuestListResponse) => React.ReactElement;
    loadingFallback?: React.ReactNode;
    renderError?: (error: string | undefined) => React.ReactElement;
}

export const FetchQuest: React.FC<FetchQuestProps> = ({
    renderSuccess,
    loadingFallback = <Loader />,
    renderError = (error) => <pre>{error || "Неизвестная ошибка"}</pre>,
}) => {
    const { data, isLoading, isError, error } = useFetchQuestListQuery({
        page: 0,
        limit: 10,
    });

    if (isLoading) return loadingFallback;

    if (isError) return renderError(handleErrorResponse(error));

    if (data) return renderSuccess(data);

    return <></>;
};
