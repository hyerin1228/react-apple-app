import axios from "axios"

// eslint-disable-next-line no-unused-vars
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "496f7be28f97f1e3ebb1e2f650bc100c",
        language: "ko-KR",

    },
});


export default instance;