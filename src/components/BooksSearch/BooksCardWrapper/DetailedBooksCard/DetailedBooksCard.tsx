import IBook from "../../../../types/types";
import React from "react";
import {Typography, Image} from "antd";
import s from "./DetailedBooksCard.module.css"

export const DetailedBooksCard: React.FC<IBook> = ({image, categories,title,authors, description}) => {
    return (
        <div className={s.cardRow}>
            <Image alt="cover" src={image} className={s.cardImage}/>
            <div className={s.cardColumn}>
                <Typography.Text underline={true}>{categories}</Typography.Text>
                <Typography.Title level={4}>{title}</Typography.Title>
                <Typography.Text>{authors}</Typography.Text>
                <Typography.Text strong={true}>{description}</Typography.Text>
            </div>
        </div>
    )
}