import {defineStore} from "pinia";
import {ref} from "@vue/reactivity";
import instance from "~/shared/api/axios";
import {useFilterStore} from "~/features/filter/filter";

export interface ICharacteristic {
    id: number
    key: string
    value: string
}

export const useCharacteristicStore = defineStore('characteristic', () => {
    const characteristics = ref<ICharacteristic[]>([])
    const productCharacteristics = ref<ICharacteristic[]>([])

    async function getCharacteristics(id: number, keys: string[]) {
        try {
            const {data} = await instance.get<ICharacteristic[]>('/characteristic/filter/'+id,{params: {keys}})
            characteristics.value = data
        } catch (e) {
            return e
        }
    }

    async function getCharacteristicsByProductId(productId: string) {
        try {
            const {data} = await instance.get<ICharacteristic[]>(`/characteristic/${productId}`)
            productCharacteristics.value = data
        } catch (e) {
            return e
        }
    }

    return {
        characteristics,
        productCharacteristics,
        getCharacteristics,
        getCharacteristicsByProductId
    }
})