<template>
  <ul class="tabs">
    <li
        v-for="category of categoryStore.categories"
        @click="getProductsByCategoryId(category.id)"
        :key="category.id"
        :class="{'tab_active': category.id === categoryStore.categoryId}"
        class="tab button"
    >
      {{category?.title}}
    </li>
  </ul>
</template>

<script setup lang="ts">
import {useCategoryStore} from "~/features/category/category";
import {useProductStore} from "~/features/product/product";

const categoryStore = useCategoryStore()
const productStore = useProductStore()

await categoryStore.getCategories()

function getProductsByCategoryId(categoryId:number) {
  productStore.getProductsByCategoryId(categoryId)
  categoryStore.setCategoryId(categoryId)
}
</script>

<style lang="scss" scoped>
  .tabs {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-left: 1px solid;
    justify-content: space-around;
  }
  .tab {
    padding: 22px 46px;
    border-right: 1px solid;
    &_active {
      background: #B14101;
      color: #fff;
    }
  }
</style>