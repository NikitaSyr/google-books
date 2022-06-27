import React from "react";
import {BooksCardWrapper} from "../BooksCard/BooksCardWrapper";
import {useDispatch, useSelector} from "react-redux";
import {actions, getBooksData, getTotalBooksCount} from "../../../redux/booksSearchReducer";
import {Button} from "antd";
import s from "./BooksCardList.module.css"
export const BooksCardList = () => {
    const dispatch = useDispatch();
    const booksData = useSelector(getBooksData);
    const totalBooksCount = useSelector(getTotalBooksCount);

    const booksCardList = booksData.map(item => (
        <BooksCardWrapper key={item.id} {...item}/>
    ));

    const loadMoreData = () => {
        dispatch(actions.getMoreBooksDataRequestAC())
    }

    return (
        <>
            {totalBooksCount ? <div>
                Found {totalBooksCount} results
            </div> : null}
            <div className={s.booksCardList}>
                {booksCardList}
            </div>
            {booksData.length ? <Button onClick={loadMoreData} className={s.loadMoreButton}>Load more</Button> : null}
        </>
    )
}