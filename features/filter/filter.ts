import {defineStore} from "pinia";
import {computed, reactive, ref} from "@vue/reactivity";
import instance from "~/shared/api/axios";
import {useRoute} from "vue-router";

export interface IFilter {
    id: number
    filterId: number
    key: string
}
export interface IFilterItem {
    id: number
    key: string
    value: string

}

export const useFilterStore = defineStore('filter', () => {
    const filterItems = ref<IFilter[]>([])
    const params = ref([])
    const queryFilter = reactive<any>({})
    const route = useRoute()

    async function getFilterItems(filterId: number) {
        try {
            const {data} = await instance.get('/filter-item/' + filterId)
            filterItems.value = data
        } catch (e) {
            return e
        }
    }

    async function createFilter(filterId: number) {
        const {data} = await instance.get('/filter-item/' + filterId)
        filterItems.value = data
        filterItems.value.forEach(filterItem => {
            queryFilter[filterItem.key] = route.query[filterItem.key] ?
                queryFilter[filterItem.key].concat(route.query[filterItem.key]) : []
        })
    }

    const computedFilterItems = computed(() => filterItems.value)

    return {
        filterItems,
        params,
        getFilterItems,
        queryFilter,
        createFilter,
        computedFilterItems
    }
})