import {useDispatch} from "react-redux";
import {actions} from "../../../redux/booksSearchReducer";
import React from "react";
import {IBooksSearchParams} from "../../../types/types";
import {Button, Form, Input, Select, Typography} from "antd";
import s from "./BooksSearchForm.module.css"

type PropsType = {
}

export const BooksSearchForm: React.FC<PropsType> = () => {
    const dispatch = useDispatch();
    const {Option} = Select;
    const {Title} = Typography;
    const getBooksDataWithFormValues = (values: IBooksSearchParams): void => {
        dispatch(actions.getBooksDataRequestAC(values))
    }
    return (
        <div className={s.booksSearchForm}>
            <Title>Search for books</Title>
            <Form
                className={s.antdForm}
                name="booksSearchForm"
                onFinish={getBooksDataWithFormValues}
            >
                <Form.Item
                    name="textToSearch"
                >
                    <Input/>
                </Form.Item>
                <div className={s.antdFormRow}>
                    <Form.Item
                        className={s.antdFormItem}
                    name="category"
                    label="Categories"
                    initialValue="all"
               >
                    <Select>
                        <Option value="all">ALL</Option>
                        <Option value="art">ART</Option>
                        <Option value="biography">BIOGRAPHY</Option>
                        <Option value="computers">COMPUTERS</Option>
                        <Option value="history">HISTORY</Option>
                        <Option value="medical">MEDICAL</Option>
                        <Option value="poetry">POETRY</Option>
                    </Select>
                </Form.Item>
                    <Form.Item
                        className={s.AntdFormItem}
                        name="sortDirection"
                        label="Sorting by"
                        initialValue="relevance">
                        <Select>
                            <Option value="relevance">RELEVANCE</Option>
                            <Option value="newest">NEWEST</Option>
                        </Select>
                    </Form.Item>
                </div>
                <Form.Item>
                    <Button htmlType="submit">Start search</Button>
                </Form.Item>
            </Form>
        </div>
    )
}