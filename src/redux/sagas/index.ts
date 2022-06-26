import {all, fork} from 'redux-saga/effects'
import booksDataSaga from "./booksSearchSaga";

export default function* rootSaga() {
    yield all([
        fork(booksDataSaga)
    ]);
}