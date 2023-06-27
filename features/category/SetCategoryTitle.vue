<template>
  <li
      @click="setCategoryTitle(category.title)"
      :key="category.id"
      class="links_item button"
  >
    <nuxt-link :to="url(category.id)">{{category.title}}</nuxt-link>
  </li>
</template>

<script setup lang="ts">
import {ICategory, useCategoryStore} from "~/features/category/category";
import {computed} from "@vue/reactivity";

interface IProps {
  category: ICategory
}

const props = defineProps<IProps>()

const categoryStore = useCategoryStore()

function setCategoryTitle(title: string) {
  categoryStore.setCategoryTitle(title)
}
const url = (categoryId: number) => computed(() => {
  return `/catalog/${categoryId}`
})
</script>

<style lang="scss" scoped>

</style>