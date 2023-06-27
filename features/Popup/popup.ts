import {defineStore} from "pinia";
import {ref} from "@vue/reactivity";


export const usePopupStore = defineStore('popup', () => {
    const isVisible = ref(false)
    const popupId = ref(0)

    function openPopup(id: number) {
        popupId.value = id
        isVisible.value = true
    }

    function closePopup() {
        isVisible.value = false
    }

    return {
        isVisible,
        popupId,
        openPopup,
        closePopup
    }
})