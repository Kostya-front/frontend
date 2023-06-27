<template>
  <CounterProduct>
    <button @click="setCountBasket(basketItem.id,  - 1)">-</button>
    <span class="title title-h4">{{basketItem.count}}</span>
    <button @click="setCountBasket(basketItem.id, + 1)">+</button>
    <slot/>
  </CounterProduct>
</template>

<script setup lang="ts">
import CounterProduct from '@/entities/CounterProduct'
import {IBasketItem, useBasketStore} from "~/features/basket/basket";
interface IProps {
  basketItem: IBasketItem
}
const props = defineProps<IProps>()
const basketStore = useBasketStore()

function setCountBasket(basketItemId: number, count: number) {
  basketStore.setCountBasket(basketItemId, count)
}
</script>

<style scoped>

</style>