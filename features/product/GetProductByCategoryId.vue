<template>
  <li @click="getProductsByCategoryId(category.id)" class="tab button">{{category.title}}</li>
</template>

<script setup lang="ts">

import {useProductStore} from "~/features/product/product";
import {ICategory, useCategoryStore} from "~/features/category/category";
interface IProps {
  category: ICategory
}
const props = defineProps<IProps>()
const productStore = useProductStore()
const categoryStore = useCategoryStore()

function getProductsByCategoryId(categoryId:number) {
 productStore.getProductsByCategoryId(categoryId)
 categoryStore.setCategoryId(categoryId)
}
</script>

<style lang="scss" scoped>
  .tab {
    padding: 22px 46px;
    border-right: 1px solid;
  }
</style>