import {AppState} from "./reduxStore";
import IBook, {
    BookSearchCategories,
    BooksSearchActions,
    BooksSearchSortDirection,
    GetBooksDataRequest,
    IBooksSearchParams,
    SetBooksData,
    SetErrorMessage,
    SetIsFetching,
} from "../types/types";

export const GET_BOOKS_DATA_REQUEST = 'google-books/booksSearch/GET_BOOKS_DATA_REQUEST';
export const SET_BOOKS_DATA = 'google-books/booksSearch/SET_BOOKS_DATA';
export const SET_IS_FETCHING = 'google-books/booksSearch/SET_IS_FETCHING';
export const SET_ERROR_MESSAGE = 'google-books/booksSearch/SET_ERROR_MESSAGE';

interface IState {
    booksSearchParams: IBooksSearchParams,
    booksData: IBook[],
    totalBooksCount: number | null,
    isFetching: boolean,
    errorMessage: string | null
}

const initialSearchParams: IBooksSearchParams = {
    textToSearch: "",
    category: BookSearchCategories.all,
    sortDirection: BooksSearchSortDirection.relevance
}

const initialState: IState = {
    booksSearchParams: initialSearchParams,
    booksData: [],
    totalBooksCount: null,
    isFetching: false,
    errorMessage: null
}
//BooksSearchActions
export const booksSearchReducer = (state = initialState, action: BooksSearchActions): IState => {
    switch (action.type) {
        case GET_BOOKS_DATA_REQUEST: {
            console.log('reducer')
            return {
                ...state,
                booksSearchParams: action.payload.booksSearchParams
            }
        }
        case SET_BOOKS_DATA: {
            return {
                ...state,
                booksData: action.payload.booksData,
                totalBooksCount: action.payload.totalBooksCount
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        }
        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }
        }
        default:
            return state;
    }
}

export const actions = {
    getBooksDataRequestAC: (booksSearchParams: IBooksSearchParams): GetBooksDataRequest => ({
        type: GET_BOOKS_DATA_REQUEST,
        payload: {booksSearchParams}
    }),
    setBooksDataAC: (booksData: IBook[], totalBooksCount: number): SetBooksData => ({
        type: SET_BOOKS_DATA,
        payload: {booksData, totalBooksCount}
    }),
    setErrorMessageAC: (errorMessage: string | null): SetErrorMessage => ({
        type: SET_ERROR_MESSAGE,
        payload: {errorMessage}
    }),
    setIsFetchingAC: (isFetching: boolean): SetIsFetching => ({
        type: SET_IS_FETCHING,
        payload: {isFetching}
    })
}

export const getBooksData = (state: AppState): IBook[] => {
    return state.booksSearchPage.booksData
}

export const getSearchParams = (state: AppState): IBooksSearchParams => {
    return state.booksSearchPage.booksSearchParams
}