import axios from 'axios'
import router from "@/router";
axios.defaults.baseURL = process.env.BACKEND_URL

axios.interceptors.request.use(config => {
        console.log("entered interceptors.request")
        const token = localStorage.getItem('token')
        if (token && config.url !== "/login" && config.url !== "/") {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    response => {
        console.log("entered interceptors.response")
        return response},
    err => {
        if(err.response.status === 401){
            window.alert("You are not logged in.")
            localStorage.removeItem('token');
            return router.push('/login')
        }
        return Promise.reject(err);
    }
)

export default {
    install: (app) => {
        app.config.globalProperties.$axios = axios
    },
}