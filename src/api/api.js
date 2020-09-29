import axios from "./axios";

let api = {
    reqPersonalized(limit = 6){
        return axios.get("/personalized", {
            params: {
                limit,
            },
        });
    },
};

export default {
    install(vue) {
        vue.prototype.$api = api;
    },
};