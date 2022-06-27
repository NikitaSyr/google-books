import {BooksSearchForm} from "./BooksSearchForm/BooksSearchForm";
import {BooksCardList} from "./BookCardList/BooksCardList";
import s from "./BooksSearch.module.css"
import {useSelector} from "react-redux";
import {getIsFetching} from "../../redux/booksSearchReducer";
import {Spin} from "antd";

export const BooksSearch = () => {
    const isFetching = useSelector(getIsFetching)

    return (
        <div className={s.booksSearch}>
            <BooksSearchForm/>
            {isFetching && <Spin size={"large"} className={s.antdSpin}/>}
            <BooksCardList/>
        </div>
    )
}