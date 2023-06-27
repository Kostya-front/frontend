<template>
  <button @click="deleteBasketItem(basketItemId)" class="text text-l">X</button>
</template>

<script setup lang="ts">

import {useBasketStore} from "~/features/basket/basket";
interface IProps {
  basketItemId: number
}
const props = defineProps<IProps>()
const basketStore = useBasketStore()

function deleteBasketItem(id: number) {
  basketStore.deleteBasketItem(id)
}
</script>

<style lang="scss" scoped>

</style>