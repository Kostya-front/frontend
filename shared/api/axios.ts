import axios from "axios";
import {useAuthStore} from "~/features/auth/auth";

const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

instance.interceptors.request.use((config) => {
    const authStore = useAuthStore()

    config.headers['Authorization'] = `Bearer ${authStore.token}`
    return config
}, (error) => {
    return Promise.reject(error)
})

export default instance