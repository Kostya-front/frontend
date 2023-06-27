import {useAuthStore} from "~/features/auth/auth";
import {useCookie} from "#app";

export default function authGlobal() {
    const authStore = useAuthStore()

    const token = useCookie('token').value

    if (typeof token === 'string') {
        authStore.token = token
        authStore.isAuth = true
    }

    console.log(12)
}