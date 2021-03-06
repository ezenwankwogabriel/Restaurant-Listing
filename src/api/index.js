import axios from "axios";

export const api = axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1/",
    timeout: 30000,
    headers: { "Accept": "application/json", "user-key": "0e352334b8987d5e111368dcd8e3607a" },
})

const CancelToken = axios.CancelToken;
export const $axios = axios;
export const source = CancelToken.source();
export const apiCancelToken = source.token;

