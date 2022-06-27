import {AppState} from "./reduxStore";
import IBook, {
    BooksSearchActions,
    GetBooksDataInitialRequest,
    IBooksSearchParams,
    SetBooksData,
    SetErrorMessage,
    SetIsFetching,
} from "../types/types";
import {BOOKS_SEARCH_PAGINATION_COUNT} from "../constants/constants";

export const GET_BOOKS_DATA_INITIAL_REQUEST = 'google-books/booksSearch/GET_BOOKS_DATA_INITIAL_REQUEST';
export const GET_MORE_BOOKS_DATA_REQUEST = 'google-books/booksSearch/GET_MORE_BOOKS_DATA_REQUEST';
export const SET_BOOKS_DATA = 'google-books/booksSearch/SET_BOOKS_DATA';
export const SET_IS_FETCHING = 'google-books/booksSearch/SET_IS_FETCHING';
export const SET_ERROR_MESSAGE = 'google-books/booksSearch/SET_ERROR_MESSAGE';

interface IState {
    booksSearchParams: IBooksSearchParams,
    booksData: IBook[],
    currentStartIndex: number
    totalBooksCount: number | null,
    isFetching: boolean,
    errorMessage: string | null
}

const initialSearchParams: IBooksSearchParams = {
    textToSearch: "",
    category: "all",
    sortDirection: "relevance"
}

const initialState: IState = {
    booksSearchParams: initialSearchParams,
    booksData: [],
    currentStartIndex: 0,
    totalBooksCount: null,
    isFetching: false,
    errorMessage: null
}
export const booksSearchReducer = (state = initialState, action: BooksSearchActions): IState => {
    switch (action.type) {
        case GET_BOOKS_DATA_INITIAL_REQUEST: {
            return {
                ...state,
                booksData: [],
                currentStartIndex: 0,
                totalBooksCount: null,
                booksSearchParams: action.payload.booksSearchParams
            }
        }
        case SET_BOOKS_DATA: {
            return {
                ...state,
                booksData: [...state.booksData, ...action.payload.booksData],
                currentStartIndex: state.currentStartIndex + BOOKS_SEARCH_PAGINATION_COUNT,
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
    getBooksDataRequestAC: (booksSearchParams: IBooksSearchParams): GetBooksDataInitialRequest => ({
        type: GET_BOOKS_DATA_INITIAL_REQUEST,
        payload: {booksSearchParams}
    }),
    getMoreBooksDataRequestAC: () => ({
        type: GET_MORE_BOOKS_DATA_REQUEST
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

export const getTotalBooksCount = (state: AppState): number | null => {
    return state.booksSearchPage.totalBooksCount
}

export const getSearchParams = (state: AppState): IBooksSearchParams => {
    return state.booksSearchPage.booksSearchParams
}

export const getIsFetching = (state: AppState): boolean => {
    return state.booksSearchPage.isFetching
}

export const getSearchCurrentSearchIndex = (state: AppState): number => {
    return state.booksSearchPage.currentStartIndex
}