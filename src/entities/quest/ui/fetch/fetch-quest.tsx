import { Virtuoso } from "react-virtuoso";
import {
    useFetchQuestListQuery,
    questEntityAdapter,
    questEntitySelector,
    // type FetchQuestsRequest,
    // type FetchQuestsResponse,
} from "../../api";
import { handleErrorResponse } from "@/shared/lib/helpers/handle-error-response";
import { QuestListItem } from "../quest-list/quest-list-item";
import { useState } from "react";

// import { Loader } from "@/shared/ui/loader";

interface FetchQuestProps {
    // queryParams: FetchQuestsRequest;
    // renderSuccess: (
    //     quests: FetchQuestsResponse,
    //     isLoading: boolean,
    //     isSuccess: boolean,
    //     isFetching: boolean
    // ) => React.ReactElement;
    loadingFallback?: React.ReactNode;
    renderError?: (error: string | undefined) => React.ReactElement;
}

export const FetchQuest: React.FC<FetchQuestProps> = ({
    // queryParams,
    // renderSuccess,
    // loadingFallback = <Loader />,
    renderError = (error) => <pre>{error || "Unknown error"}</pre>,
}) => {
    const [page, setPage] = useState(0);
    const limit = 3;

    const { data, isError, error } = useFetchQuestListQuery(
        {
            page: page,
            limit: limit,
        },
        {
            refetchOnMountOrArgChange: true,
            selectFromResult: ({ data, ...otherParams }) => ({
                data: questEntitySelector.selectAll(
                    data ?? questEntityAdapter.getInitialState()
                ),
                ...otherParams,
            }),
        }
    );

    // console.log("Fetch quest list query params: ", queryParams);

    // console.error("Fetch quest error: ", handleErrorResponse(error), error);

    // if (isLoading) return loadingFallback;

    if (isError) return renderError(handleErrorResponse(error));

    // if (isSuccess)
    return (
        <Virtuoso
            data={data}
            itemContent={(index, quest) => (
                <QuestListItem key={quest.id} quest={quest} />
            )}
            endReached={() => setPage((previousPage) => previousPage + 1)}
            style={{ height: "400px", width: "100%" }}
        />
    );

    // return <></>;
};
