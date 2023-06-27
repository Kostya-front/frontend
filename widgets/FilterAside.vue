<template>
  <Filter :categories="categoryStore.cashCategories">
    <template v-slot:categoryList>
      <SetCategoryTitle
          v-for="category of categoryStore.cashCategories"
          :key="category.id"
          :category="category"
      />
    </template>

<!--    <SetFilterParams-->
<!--        v-for="item of filterStore.computedFilterItems"-->
<!--        :categoryId="id"-->
<!--        :key="item.id"-->
<!--        :title="item.key"-->
<!--      />-->
  </Filter>
</template>

<script setup lang="ts">
import {useAsyncData} from "#app";
import {useCategoryStore} from "~/features/category/category";
import Filter from '~/entities/Filter.vue'
import FilterParams from '~/features/filter/FilterParams.vue'
import {useFilterStore} from "~/features/filter/filter";
import {useCharacteristicStore} from "~/features/characteristic/characteristic";
import SetCategoryTitle from "~/features/category/SetCategoryTitle.vue";
import SetFilterParams from "~/features/filter/SetFilterParams.vue";

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