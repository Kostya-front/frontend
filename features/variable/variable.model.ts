import {defineStore} from "pinia";
import {ref} from "@vue/reactivity";
import instance from "~/shared/api/axios";
import {useProductStore} from "~/features/product/product";

export interface IVariableItem {
    id: number
    title: string
    price_original: number
    price_with_discount: number
    discount: number
    variableId: number
    productTitle: string
}
export interface IVariable {
    id: number
    title: string
    productInfoId: number
    variableItems: IVariableItem[]
}

export const useVariableStore = defineStore('variable', () => {
    const variables = ref<IVariable[]>([])
    const productStore = useProductStore()

    async function getVariables(productInfoId: string) {
        const {data} = await instance.get<IVariable[]>(`/variable/${productInfoId}`)
        variables.value = data
    }

    async function getVariableData(variableItemId: number) {
        const {data} = await instance.get<IVariableItem>(`/variable-item/${variableItemId}`)
        productStore.product.product.title = `${data.title}`
        productStore.product.product.price_with_discount = data.price_with_discount
    }

    return {
        variables,
        getVariables,
        getVariableData
    }
})