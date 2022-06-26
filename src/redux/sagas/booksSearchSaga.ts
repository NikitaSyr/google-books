import {call, put, select, SagaReturnType, takeLatest, all} from "redux-saga/effects";
import {booksAPI} from "../../api/api";
import {isErrorResponse} from "../../types/types";
import {actions, GET_BOOKS_DATA_REQUEST} from "../booksSearchReducer";
import {TakeableChannel} from "redux-saga";

type LoginServiceResponse = SagaReturnType<typeof booksAPI.searchBooksWithParams>

function* booksSearchRequestSaga() {
    try {
        const response: LoginServiceResponse = yield call(booksAPI.searchBooksWithParams)
        if (isErrorResponse(response)) {
            yield put(
                actions.setErrorMessageAC(response)
            )
        } else {
            yield put(
                actions.setBooksDataAC(response)
            );
        }
    }
    catch (e) {
        yield put(
            actions.setErrorMessageAC(e)
        )
    }
}

function* booksDataSaga() {
    yield all([
        takeLatest(GET_BOOKS_DATA_REQUEST as unknown as TakeableChannel<unknown>, booksSearchRequestSaga),
    ]);
}

export default booksDataSaga;