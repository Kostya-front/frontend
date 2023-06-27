<template>
  <Filter
      :categories="categoryStore.cashCategories"
  >
    <FilterParams
        v-for="item of filterStore.computedFilterItems"
        :categoryId="id"
        :key="item.id"
        :title="item.key"
    />
  </Filter>
</template>

<script setup lang="ts">
import {useCategoryStore} from "~/features/category/category";
import Filter from '~/entities/Filter.vue'
import FilterParams from '~/features/filter/FilterParams.vue'
import {useFilterStore} from "~/features/filter/filter";
import {useCharacteristicStore} from "~/features/characteristic/characteristic";

interface IProps {
  id: number
}

const props = defineProps<IProps>()

const categoryStore = useCategoryStore()
const filterStore = useFilterStore()
const characteristicStore = useCharacteristicStore()

await filterStore.createFilter(props.id)
await characteristicStore.getCharacteristics(props.id, filterStore.computedFilterItems.map(item => item.key))

if(categoryStore.categories.length === 0){
  await categoryStore.getCategories()
}
</script>

<style scoped>

</style>