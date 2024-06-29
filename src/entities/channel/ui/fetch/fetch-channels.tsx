import { useFetchAllChannelsQuery, type TelegramChannel } from "../../api";
import { handleErrorResponse } from "@/shared/lib/helpers/handle-error-response";

import { Loader } from "@/shared/ui/loader";

interface FetchChannelsProps {
    renderSuccess: (channels: TelegramChannel[]) => React.ReactElement;
    loadingFallback?: React.ReactNode;
    renderError?: (error: string | undefined) => React.ReactElement;
}

export const FetchChannels: React.FC<FetchChannelsProps> = ({
    renderSuccess,
    loadingFallback = <Loader />,
    renderError = (error) => <pre>{error}</pre>,
}) => {
    const { data, isLoading, isSuccess, isError, error } =
        useFetchAllChannelsQuery();

    console.error("Fetch quest error: ", handleErrorResponse(error), error);

    if (isLoading) return loadingFallback;

    if (isError)
        return renderError(handleErrorResponse(error) || "Unknown error");

    if (isSuccess) return renderSuccess(data);

    return <></>;
};
