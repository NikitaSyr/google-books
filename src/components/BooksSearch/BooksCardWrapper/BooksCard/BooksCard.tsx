import {Card, Typography} from 'antd';
import IBook from "../../../../types/types";
import React from "react";
import s from "./BooksCard.module.css"


export const BooksCard: React.FC<IBook> = ({image, categories,title,authors}) => {
    return (
        <Card
            hoverable
            className={s.antdCard}
            cover={<img alt="cover" src={image}/>}
        >
            <div className={s.bookInfo}>
                <Typography.Text underline={true}>{categories}</Typography.Text>
                <Typography.Text strong={true}>{title}</Typography.Text>
                <Typography.Text>{authors}</Typography.Text>
            </div>
        </Card>
    )
}