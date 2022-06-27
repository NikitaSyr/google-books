import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {ErrorResponse} from "../utils/utils";
import {BooksAPIReturn } from "../types/types";
import {BOOKS_SEARCH_PAGINATION_COUNT} from "../constants/constants";

const config: AxiosRequestConfig = {
    baseURL: `https://www.googleapis.com/books/v1/`,
};

const APIKey = "AIzaSyAlRn_FegfIepNSitksCtywOhPnHCvnQfM"
const instance: AxiosInstance = axios.create(config);


export const booksAPI = {
    async searchBooksWithParams(textToSearch: string,
                                sortDirection: string,
                                category: string,
                                startIndex: number): Promise<BooksAPIReturn | ErrorResponse> {
        try {
            let subject = "";
            if (category !== "all") {
                subject  = category;
            }
            const booksData = await instance.get(`volumes?q=${textToSearch}+subject:${subject}&
            orderBy=${sortDirection}&maxResults=${BOOKS_SEARCH_PAGINATION_COUNT}&startIndex=${startIndex}&${APIKey}`);
            return booksData.data;
        } catch (e: any) {
            return e;
        }
    }
}