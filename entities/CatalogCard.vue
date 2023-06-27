<template>
  <div class="card">
    <h4 class="title title-h4">{{category.title}}</h4>
    <nuxt-link :to="'/catalog/' + category.id"></nuxt-link>
  </div>
</template>

<script setup lang="ts">
import {ICategory} from "~/features/category/category";

interface IProps {
  category: ICategory
}
const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
  .card {
    background: url("@/assets/img/catalog_card.png") no-repeat center/cover;
    padding: 40px 32px;
    position: relative;
    & a {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
  .title {
    color: #fff;
  }
</style>