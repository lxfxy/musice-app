import axios from "axios";

axios.defaults.baseURL = "http://www.huashengshu.top:3000";
axios.defaults.withCredentials = true;
axios.interceptors.response.use((data) => {
    return data.data;
});

export default axios;