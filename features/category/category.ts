import {defineStore} from "pinia";
import {computed, ref} from "@vue/reactivity";
import instance from "~/shared/api/axios";

export interface ICategory {
    id: number
    title: string
}

export const useCategoryStore = defineStore('category', () => {
    const categories = ref<ICategory[]>([])
    const categoryId = ref(1)
    const categoryTitle = ref('')

    const pending = ref(false)
    const error = ref('')

    async function getCategories() {
        try {
            pending.value = true
            const { data } = await instance.get('/category')
            categories.value = data
            pending.value = false
            return data
        } catch (e) {
            return e
        }
    }

    async function getCategoryById(categoryId: string) {
        const {data} = await instance.get<ICategory>(`/category/${categoryId}`)
        categoryTitle.value = data.title
    }
    function setCategoryTitle(title: string) {
        categoryTitle.value = title
    }

    function setCategoryId(id: number) {
        categoryId.value = id
    }

    const cashCategories = computed(() => {
        return categories.value
    })
    return {
        categories,
        pending,
        error,
        categoryTitle,
        setCategoryId,
        getCategories,
        setCategoryTitle,
        getCategoryById,
        categoryId,
        cashCategories
    }
})