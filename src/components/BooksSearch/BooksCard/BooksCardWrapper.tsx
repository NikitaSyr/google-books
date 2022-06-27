import React, {useState} from "react";
import IBook from "../../../types/types";
import {Modal} from 'antd';
import {BooksCard} from "./BooksCard/BooksCard";
import {DetailedBooksCard} from "./DetailedBooksCard/DetailedBooksCard";
import s from "./BooksCardWrapper.module.css"

// type PropsType = {
//     bookData: IBook
// }

//TODO
// RENAME FOLDER TO BooksCardWrapper

export const BooksCardWrapper: React.FC<IBook> = ({id, image, title, description, authors, categories}) => {
    const [bookSelected, setBookSelected] = useState(false);
    const openModal = () => {
        setBookSelected(true)
    }
    const closeModal = () => {
        setBookSelected(false)
    }
    return (
        <div>
            <Modal visible={bookSelected}
                   onOk={closeModal}
                   onCancel={closeModal}
                   footer={[]}
                   className={s.antdModal}
            >
                <DetailedBooksCard id={id} image={image} categories={categories} title={title}
                        authors={authors} description={description}/>
            </Modal>
            <div onClick={openModal}>
                <BooksCard id={id} image={image} categories={categories} title={title}
                authors={authors}/>
            </div>

        </div>
    )
}