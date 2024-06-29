import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
const isFetchBaseQueryError = (
    error: unknown
): error is FetchBaseQueryError => {
    return typeof error === "object" && error != null && "status" in error;
};

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
const isErrorWithMessage = (error: unknown): error is { message: string } => {
    return (
        typeof error === "object" &&
        error != null &&
        "message" in error &&
        typeof (error as any).message === "string"
    );
};

export const handleErrorResponse = (error: unknown) => {
    if (isFetchBaseQueryError(error)) {
        const errorMessage =
            "error" in error
                ? error.error
                : (error.data as { status: number; message: string }).message;
        return errorMessage;
    } else if (isErrorWithMessage(error)) {
        return error.message;
    }
};
