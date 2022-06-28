import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions, getBooksData, getTotalBooksCount} from "../../../redux/booksSearchReducer";
import {Button, Typography} from "antd";
import s from "./BooksCardList.module.css"
import {BooksCardWrapper} from "../BooksCardWrapper/BooksCardWrapper";

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
            {totalBooksCount ? <Typography.Text strong={true}>
                Found {totalBooksCount} results
            </Typography.Text> : null}
            <div className={s.booksCardList}>
                {booksCardList}
            </div>
            {booksData.length ? <Button onClick={loadMoreData} className={s.loadMoreButton}>Load more</Button> : null}
        </>
    )
}