import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions, getBooksData} from "../../redux/booksSearchReducer";
import {BookSearchCategories, BooksSearchSortDirection} from "../../types/types";

export const BooksSearch = () => {
    const dispatch = useDispatch();
    const firstData = useSelector(getBooksData)
    // useEffect(() => {
    //     dispatch(actions.setBooksDataAC({}))
    // }, []);
    const textToSearch = "";
    const sortDirection = BooksSearchSortDirection.relevance;
    const category = BookSearchCategories.all
    const loadData = () => {
        console.log({textToSearch, sortDirection, category})
        console.log(firstData)
        dispatch(actions.getBooksDataRequestAC({textToSearch, sortDirection, category}))
    }

    return (
        <div>
            <button onClick={loadData}>Жмак</button>
        </div>
    )
}