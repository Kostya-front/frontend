import {defineStore} from "pinia";
import {computed, ref} from "@vue/reactivity";
import instance from "~/shared/api/axios";
import {IProduct, useProductStore} from "~/features/product/product";
import {AxiosError} from "axios";

export interface IBasketItem {
    count: number
    sum: number
    id: number
    productId: number
    basketId: number
    product: IProduct
}

export const useBasketStore = defineStore('basket', () => {
    const basket = ref<IBasketItem[]>([])

    async function getBasketItems() {
        try {
            const {data} = await instance.get<IBasketItem[]>('/basket-item/find-by-basket-id')
            basket.value = data
        } catch (e: AxiosError | any) {
            handlerErrorAuth(e)
        }
    }
    async function createBasketItem(productId: number) {
        try {
            const {data} = await instance.post<IBasketItem>('/basket-item', {productId})

            const basketItem = basket.value.find(item => item.id === data.id)

            basketItem ?  ++basketItem.count : basket.value.push(data)

        } catch (e: AxiosError | any) {
            handlerErrorAuth(e)
        }
    }

    async function setCountProduct(productId: number, count: number) {
        try {
            const {data} = await instance.patch<IBasketItem>(`/basket-item/update/${productId}`, {count})
            const basketItem = basket.value.find(item => item.id === data.id)

            basketItem ? basketItem.count = data.count : basket.value.push(data)

            return data
        } catch (e) {
            return e
        }
    }

    async function setCountBasket(basketItemId: number, count: number) {
        try {
            const {data} = await instance.patch<IBasketItem>(`/basket-item/${basketItemId}`,{count})
            const basketItem = basket.value.find(item => item.id === data.id)

            basketItem ? basketItem.count = data.count : null

            if(typeof data === 'number') {
                basket.value = basket.value.filter(item => item.id !== basketItemId)
            }
            return data
        } catch (e) {
            return e
        }
    }

    async function deleteBasketItem(id: number) {
        try {
            await instance.delete(`/basket-item/${id}`)
            basket.value = basket.value.filter(item => item.id !== id)
        } catch (e) {
            return e
        }
    }

    const totalCountBasket = computed(() => {
       return basket.value.reduce((acc, num) => acc + num.count, 0)
    })

    function handlerErrorAuth(error: AxiosError | any) {
        console.log(error)
    }
    return {
        basket,
        createBasketItem,
        totalCountBasket,
        getBasketItems,
        setCountProduct,
        setCountBasket,
        deleteBasketItem
    }
})