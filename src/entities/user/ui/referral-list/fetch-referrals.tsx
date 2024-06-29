import {
    useFetchUserReferralsQuery,
    type FetchUserReferralsResponse,
} from "../../api";
import { handleErrorResponse } from "@/shared/lib/helpers/handle-error-response";

import { Loader } from "@/shared/ui/loader";

interface FetchReferralsProps {
    renderSuccess: (quests: FetchUserReferralsResponse) => React.ReactElement;
    loadingFallback?: React.ReactNode;
    renderError?: (error: string | undefined) => React.ReactElement;
}

export const FetchReferrals: React.FC<FetchReferralsProps> = ({
    renderSuccess,
    loadingFallback = <Loader />,
    renderError = (error) => <pre>{error}</pre>,
}) => {
    const { data, isLoading, isError, error } = useFetchUserReferralsQuery();

    if (isLoading) return loadingFallback;

    if (isError)
        return renderError(handleErrorResponse(error || "Unknown error"));

    if (data) return renderSuccess(data);

    return <></>;
};
