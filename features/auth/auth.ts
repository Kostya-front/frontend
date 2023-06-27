import {defineStore} from "pinia";
import {ref} from "@vue/reactivity";
import instance from "~/shared/api/axios";
import {AxiosError} from "axios";
import {useCookie} from "#app";
import {usePopupStore} from "~/features/Popup/popup";
import {watch} from "@vue/runtime-core";
import {useBasketStore} from "~/features/basket/basket";
import {useRouter} from "vue-router";

interface IAuth {
    username?: string
    email: string
    password: string
}

export const useAuthStore = defineStore('auth', () => {
    const authDate = ref<IAuth>({
        username: '',
        email: '',
        password:''
    })

    const token = ref('')
    const isAuth = ref(false)
    const popupStore = usePopupStore()
    const basketStore = useBasketStore()
    const router = useRouter()

    async function login() {
        try {
            const {data} = await instance.post<{token: string}>('/auth/login', authDate.value)
            useCookie('token').value = data.token
            token.value = data.token
            isAuth.value = true

        } catch (e: AxiosError | any) {
            handlerErrorAuth(e)
        }
    }

    async function register() {
        try {
            const {data} = await instance.post<{token: string}>('/auth/register', authDate.value)
            token.value = data.token
            document.cookie = `token=${token.value}`
            isAuth.value = true

        } catch (e) {
            handlerErrorAuth(e)
        }
    }

    function logout() {
        useCookie('token').value = null
        token.value = ''
        isAuth.value = false
        popupStore.isVisible = false
    }


    watch(isAuth, (newValue, oldValue) => {
        if(newValue === true) {
            basketStore.getBasketItems()
        }
    })

    function handlerErrorAuth(error: AxiosError | any) {
        console.log(error)
    }
    return {
        authDate,
        isAuth,
        token,
        login,
        register,
        logout,
        router
    }

})