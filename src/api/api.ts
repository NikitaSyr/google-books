import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {ErrorResponse} from "../utils/utils";

const config: AxiosRequestConfig = {
    baseURL: `https://www.googleapis.com/books/v1/`,
};

const APIKey = "AIzaSyAlRn_FegfIepNSitksCtywOhPnHCvnQfM"
const instance: AxiosInstance = axios.create(config);

interface BooksAPIReturn {
    items: any
    totalItems: number
}

export const booksAPI = {
    async searchBooksWithParams(): Promise<BooksAPIReturn | ErrorResponse>{
        try {
            const booksData = await instance.get(`volumes?q=flowers&${APIKey}`)
            return booksData.data;
        }
        catch (e: any) {
            return e;
        }
    }
}