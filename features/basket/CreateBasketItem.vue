<template>
  <nuxt-link
      @click="basketStore.createBasketItem(productId)"
      class="button link"
  >
    Купить
  </nuxt-link>
</template>

<script setup lang="ts">
import {useBasketStore} from "~/features/basket/basket";
interface IProps {
  productId: number
}
const props = defineProps<IProps>()
const basketStore = useBasketStore()
</script>

<style lang="scss" scoped>
  .link {
    color: #B14101;
  }
</style>