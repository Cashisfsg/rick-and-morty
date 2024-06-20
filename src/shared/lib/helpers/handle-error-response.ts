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

export const handleErrorResponse = (
    error: unknown,
    callback?: (error: string) => void
) => {
    if (isFetchBaseQueryError(error)) {
        const errorMessage =
            "error" in error
                ? error.error
                : (error.data as { status: number; message: string }).message;
        if (callback === undefined) {
            return errorMessage;
        }
        callback(errorMessage);
    } else if (isErrorWithMessage(error)) {
        if (callback === undefined) {
            return error.message;
        }
        callback(error.message);
    }
};
