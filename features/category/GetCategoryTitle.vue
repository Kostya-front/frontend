<template>
  <h1 class="title title-h1">{{categoryStore.categoryTitle}}</h1>
</template>

<script setup lang="ts">
import {useCategoryStore} from "~/features/category/category";
interface IProps {
  categoryId: string
}
const props = defineProps<IProps>()
const categoryStore = useCategoryStore()

await categoryStore.getCategoryById(props.categoryId)
</script>

<style lang="scss" scoped>
  .title {
    grid-area: title;
    &:first-letter {
      text-transform: uppercase;
    }
  }
</style>