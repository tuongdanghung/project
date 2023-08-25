import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:8888/api/`,
});

instance.interceptors.request.use(
    function (config: any) {
        let localData = window.localStorage.getItem("persist:auth");
        if (localData && typeof localData === "string") {
            const accessToken = JSON.parse(localData)?.token || {};
            config.headers = { authorization: "Bearer " + accessToken };
            return config;
        } else {
            return config;
        }
    },
    function (error) {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return error.response.data;
    }
);

export default instance;
