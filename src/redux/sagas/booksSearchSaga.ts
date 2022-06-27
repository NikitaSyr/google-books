import {call, put, SagaReturnType, takeLatest, all, select} from "redux-saga/effects";
import {booksAPI} from "../../api/api";
import {
    actions,
    GET_BOOKS_DATA_INITIAL_REQUEST,
    GET_MORE_BOOKS_DATA_REQUEST, getSearchCurrentSearchIndex,
    getSearchParams
} from "../booksSearchReducer";
import {TakeableChannel} from "redux-saga";
import {booksDataFromResponseCreator, isErrorResponse} from "../../utils/utils";

type LoginServiceResponse = SagaReturnType<typeof booksAPI.searchBooksWithParams>

function* booksSearchRequestSaga() {
    yield put(
        actions.setIsFetchingAC(true)
    );
    const {textToSearch, sortDirection, category} = yield select(getSearchParams);
    const startIndex: number = yield select(getSearchCurrentSearchIndex);
    try {
        const response: LoginServiceResponse = yield call(booksAPI.searchBooksWithParams, textToSearch, sortDirection, category, startIndex);
        if (isErrorResponse(response)) {
            yield put(
                actions.setErrorMessageAC(response.message)
            );
            yield put(
                actions.setIsFetchingAC(false)
            );
        } else {
            const totalBooksCountFromResponse: number = response.totalItems;
            const booksDataFromResponse = booksDataFromResponseCreator(response)
            yield put(
                actions.setErrorMessageAC(null)
            );
            yield put(
                actions.setBooksDataAC(booksDataFromResponse, totalBooksCountFromResponse)
            );
            yield put(
                actions.setIsFetchingAC(false)
            );
        }
    }
    catch (e: any) {
        yield put(
            actions.setErrorMessageAC(e)
        );
        yield put(
            actions.setIsFetchingAC(false)
        )
    }
}



function* booksDataSaga() {
    yield all([
        takeLatest(GET_BOOKS_DATA_INITIAL_REQUEST as unknown as TakeableChannel<unknown>, booksSearchRequestSaga),
        takeLatest(GET_MORE_BOOKS_DATA_REQUEST as unknown as TakeableChannel<unknown>, booksSearchRequestSaga),
    ]);
}

export default booksDataSaga;