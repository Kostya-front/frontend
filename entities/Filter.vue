<template>
  <aside class="filter">
    <ul class="links">
      <li
          v-for="category of categories"
          @click="setCategoryTitle(category.title)"
          :key="category.id"
          class="links_item button"
      >
        <nuxt-link :to="url(category.id)">{{category.title}}</nuxt-link>
      </li>
    </ul>

    <slot/>
  </aside>
</template>

<script setup lang="ts">
import {ICategory, useCategoryStore} from "~/features/category/category";
import {computed} from "@vue/reactivity";
interface IProps {
  categories: ICategory[]
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
  .filter {
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: sticky;
    top: 0;
    height: max-content;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

</style>