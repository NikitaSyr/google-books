import {
    GET_BOOKS_DATA_INITIAL_REQUEST,
    GET_MORE_BOOKS_DATA_REQUEST,
    SET_BOOKS_DATA,
    SET_ERROR_MESSAGE,
    SET_IS_FETCHING
} from "../redux/booksSearchReducer";

export default interface IBook {
    id: string
    title: string
    authors: string[]
    categories: string[]
    description?: string
    image: string
}

export interface IBooksSearchParams {
    textToSearch: string
    category: "all" | "art" | "biography" | "computers" | "history" | "medical" | "poetry",
    sortDirection: "relevance" | "newest"
}

export interface BooksAPIReturn {
    items: any
    totalItems: number
}


export interface GetBooksDataRequestPayload {
    booksSearchParams: IBooksSearchParams
}

export interface SetBooksDataPayload {
    booksData: IBook[]
    totalBooksCount: number
}

export interface SetErrorMessagePayload {
    errorMessage: string | null
}

export interface SetIsFetchingPayload {
    isFetching: boolean
}

export interface GetBooksDataInitialRequest {
    type: typeof GET_BOOKS_DATA_INITIAL_REQUEST;
    payload: GetBooksDataRequestPayload
}

export interface GetMoreBooksDataRequest {
    type: typeof GET_MORE_BOOKS_DATA_REQUEST
}
export interface SetBooksData {
    type: typeof SET_BOOKS_DATA;
    payload: SetBooksDataPayload
}
export interface SetErrorMessage {
    type: typeof SET_ERROR_MESSAGE;
    payload: SetErrorMessagePayload
}
export interface SetIsFetching {
    type: typeof SET_IS_FETCHING;
    payload: SetIsFetchingPayload
}


export type BooksSearchActions =
    | GetBooksDataInitialRequest
    | SetBooksData
    | SetErrorMessage
    | SetIsFetching

// export enum BookSearchCategories {
//     "all", "art", "biography", "computers", "history", "medical", "poetry"
// }
//
// export enum BooksSearchSortDirection {
//     "relevance" , "newest"
// }