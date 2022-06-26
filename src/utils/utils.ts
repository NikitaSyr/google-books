export interface ErrorResponse {
    message: string
}

export function isErrorResponse<TResponse>(
    response: TResponse | ErrorResponse,
): response is ErrorResponse {
    return (response as ErrorResponse).message !== undefined;
}