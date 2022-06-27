import IBook, {BooksAPIReturn} from "../types/types";

export interface ErrorResponse {
    message: string
}

export function isErrorResponse<TResponse>(
    response: TResponse | ErrorResponse,
): response is ErrorResponse {
    return (response as ErrorResponse).message !== undefined;
}

export const booksDataFromResponseCreator = (data: BooksAPIReturn): IBook[] => {
    let booksDataFromResponse: IBook[] = [];
    for (let i = 0; i< data.items.length; i++) {
        let item = data.items[i].volumeInfo;
        booksDataFromResponse.push({
            id: data.items[i].id,
            title: item.title,
            authors: item.authors,
            categories: item.categories,
            description: item.description,
            image: item.imageLinks.thumbnail
        });
    }
    return booksDataFromResponse
}