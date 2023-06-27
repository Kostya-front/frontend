<template>
  <div class="catalog_cards">
    <CatalogCard
        v-for="category of categoryStore.cashCategories"
        :category="category"
        :key="category.id"
    />
  </div>
</template>

<script setup lang="ts">

import CatalogCard from "~/entities/CatalogCard.vue";
import {useCategoryStore} from "~/features/category/category";

const categoryStore = useCategoryStore()

await categoryStore.getCategories()
</script>

<style lang="scss" scoped>
  .catalog_cards {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 40px;
    grid-template-rows: repeat(auto-fit, minmax(300px, auto));
    min-height: 100vh;
    width: 100%;
    & .card {
      grid-column: 4 span;
      &:nth-child(4), &:nth-child(5) {
        grid-column: 6 span;
      }
    }
  }
</style>