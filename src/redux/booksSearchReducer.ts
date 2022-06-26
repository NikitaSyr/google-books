import {AppState} from "./reduxStore";

export const GET_BOOKS_DATA_REQUEST = 'google-books/booksSearch/GET_BOOKS_DATA_REQUEST';
export const SET_BOOKS_DATA_SUCCESS = 'google-books/booksSearch/SET_BOOKS_DATA_SUCCESS';
export const SET_ERROR_MESSAGE = 'google-books/booksSearch/SET_ERROR_MESSAGE';

interface IState {
    booksData: any,
    fetching: boolean,
    errorMessage: string | null
}

const initialState: IState = {
    booksData: [],
    fetching: false,
    errorMessage: null
}
//BooksSearchActions
export const booksSearchReducer = (state = initialState, action: any): IState => {
    switch (action.type) {
        case GET_BOOKS_DATA_REQUEST: {
            return {
                ...state,
                fetching: true
            }
        }
        case SET_BOOKS_DATA_SUCCESS: {
            return {
                ...state,
                booksData: action.payload,
                fetching: false,
                errorMessage: null
            }
        }
        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                booksData: [],
                fetching: false,
                errorMessage: action.payload
            }
        }
        default:
            return state;
    }
}

export const actions = {
    getBooksDataRequestAC: (payload: any) => ({
        type: GET_BOOKS_DATA_REQUEST,
        payload
    }),
    setBooksDataAC: (payload: any) => ({
        type: SET_BOOKS_DATA_SUCCESS,
        payload
    }),
    setErrorMessageAC: (payload: any) => ({
        type: SET_ERROR_MESSAGE,
        payload
    })
}

export const getBooksData = (state: AppState): any => {
    return state.booksSearchPage.booksData
}