import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions, getBooksData} from "../../redux/booksSearchReducer";

export const BooksSearch = () => {
    const dispatch = useDispatch();
    const firstData = useSelector(getBooksData)
    // useEffect(() => {
    //     dispatch(actions.setBooksDataAC({}))
    // }, []);

    const loadData = () => {
        dispatch(actions.getBooksDataRequestAC(""))
        console.log(firstData)
    }

    return (
        <div>
            <button onClick={loadData}>Жмак</button>
        </div>
    )
}