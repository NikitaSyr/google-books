import {call, put, SagaReturnType, takeLatest, all, select} from "redux-saga/effects";
import {booksAPI} from "../../api/api";
import {actions, GET_BOOKS_DATA_REQUEST, getSearchParams} from "../booksSearchReducer";
import {TakeableChannel} from "redux-saga";
import {isErrorResponse} from "../../utils/utils";
import IBook, {IBooksSearchParams} from "../../types/types";

type LoginServiceResponse = SagaReturnType<typeof booksAPI.searchBooksWithParams>

function* booksSearchRequestSaga() {
    yield put(
        actions.setIsFetchingAC(true)
    )
    // const {textToSearch, sortDirection, category} = yield select(getSearchParams);
    const sortParams: IBooksSearchParams = yield select(getSearchParams);
    // console.log(sortParams)
    try {
        const response: LoginServiceResponse = yield call(booksAPI.searchBooksWithParams);
        if (isErrorResponse(response)) {
            yield put(
                actions.setErrorMessageAC(response.message)
            );
            yield put(
                actions.setIsFetchingAC(false)
            )
        } else {
            const totalBooksCountFromResponse: number = response.totalItems;
            let booksDataFromResponse: IBook[] = [];
            for (let i = 0; i< response.items.length; i++) {
                let item = response.items[i].volumeInfo;
                booksDataFromResponse.push({
                    id: response.items[i].id,
                    title: item.title,
                    authors: item.authors,
                    categories: item.categories,
                    description: item.description,
                    image: item.imageLinks.thumbnail
                });
            }
            yield put(
                actions.setErrorMessageAC(null)
            );
            yield put(
                actions.setBooksDataAC(booksDataFromResponse, totalBooksCountFromResponse)
            );
            yield put(
                actions.setIsFetchingAC(false)
            )
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
        takeLatest(GET_BOOKS_DATA_REQUEST as unknown as TakeableChannel<unknown>, booksSearchRequestSaga),
    ]);
}

export default booksDataSaga;