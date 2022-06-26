import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

const config: AxiosRequestConfig = {
    baseURL: `https://www.googleapis.com/books/v1/`,
};

const APIKey = "AIzaSyAlRn_FegfIepNSitksCtywOhPnHCvnQfM"
const instance: AxiosInstance = axios.create(config);

export const booksAPI = {
    async searchBooksWithParams() {
        try {
            const booksData = await instance.get(`volumes?q=flowers&${APIKey}`)
            console.log(booksData)
            return booksData;
        }
        catch (e) {
            return e;
        }
    }
}