<template>
  <div
      @click="productStore.chooseMainImage(image)"
      class="slide">
    <img :src="image" alt="">
  </div>
</template>

<script setup lang="ts">
import {useProductStore} from "~/features/product/product";

interface IProps {
  image: string
  index: number
}
const props = defineProps<IProps>()

const productStore = useProductStore()
</script>

<style lang="scss" scoped>
  .slide {
    padding: 5px;
    height: 100px;
    &_active {
      border: 1px solid;
    }
  }
</style>