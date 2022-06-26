export default interface IBook {
    authors: string[];
    id: string
    title: string;
    subtitle: string;
    publisher: string;
    publishedDate: string;
    image: string | undefined;
    link: string;
    rating: number;
}


export interface ErrorResponse {
    message: string
}

export function isErrorResponse<TResponse>(
    response: TResponse | ErrorResponse,
): response is ErrorResponse {
    return (response as ErrorResponse).message !== undefined;
}