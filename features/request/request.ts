import {defineStore} from "pinia";
import {reactive, ref} from "@vue/reactivity";
import instance from "~/shared/api/axios";

export const useRequestStore = defineStore('request', () => {
    const request = reactive({
        name: '',
        phone: ''
    })
    const isEmpty = ref(false)

    async function createRequest() {
        if(request.name && request.phone) {
           await instance.post('/request', {name: request.name, phone: request.phone})
            return isEmpty.value = false
        }
        else {
            isEmpty.value = true
        }
    }

    function resetForm() {
        request.name = ''
        request.phone = ''
    }

    return {
        request,
        isEmpty,
        createRequest,
        resetForm
    }
})