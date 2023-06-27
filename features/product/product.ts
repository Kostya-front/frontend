import {defineStore} from "pinia";
import instance from "~/shared/api/axios";
import {useFilterStore} from "~/features/filter/filter";
import {reactive, ref} from "@vue/reactivity";

export interface IProduct {
    id: number
    title: string
    price_with_discount: number
    price_original: number
    discount: number
    images: string[]
}

export interface IProductInfo {
    description: string
    product: IProduct
    productId: number
}
export const useProductStore = defineStore('products', () => {
    const filterStore = useFilterStore()

    const products = ref<IProduct[]>([])

    const countProduct = ref(1)

    const mainImage = ref('')

    const cashPrice = ref(0)
    let product: IProductInfo = reactive({
        description: '',
        product:{
            id: 0,
            title: '',
            price_with_discount: 0,
            price_original: 0,
            images: [],
            discount: 0},
        productId:0
    })

    async function getProductsByCategoryId(categoryId: number) {
        const {data} = await instance.get<IProduct[]>(`/product/find-by-category-id/${categoryId}`)
        products.value = data
    }

    async function getOneById(productId: string) {
        try {
            const {data} = await instance.get<IProductInfo>('/product-info/'+productId)
            product.productId = data.productId
            product.product = data.product
            cashPrice.value = data.product.price_with_discount
            mainImage.value = data.product.images[0]
            product.description = data.description
        } catch (e) {

        }
    }
    async function getFilteredProducts(categoryId = 1) {
        try {
            const {data} = await instance.get<IProduct[]>('/product/filter/' + categoryId,
                {params:filterStore.queryFilter}
            )

            products.value = data
        } catch (e) {

        }
    }

    async function changeCountProduct(count: number) {
        if(countProduct.value + count <= 0) {
            return
        }
        const previousCount = countProduct.value;
        countProduct.value += count;

        const priceRatio = countProduct.value / previousCount;
        product.product.price_with_discount *= priceRatio;
    }

    function chooseMainImage(url: string) {
        mainImage.value = url
    }

    function resetCountProduct(){
        product.product.price_with_discount = cashPrice.value
        countProduct.value = 1
    }

    return {
        products,
        product,
        countProduct,
        mainImage,
        getFilteredProducts,
        getProductsByCategoryId,
        getOneById,
        changeCountProduct,
        resetCountProduct,
        chooseMainImage
    }
})