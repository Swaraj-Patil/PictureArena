import axios from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

API.interceptors.request.use(
    config => {
        // Need to add token
        return config
    },
    error => Promise.reject(error)
)

API.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
)

export default API