<template>
  <CounterProduct>
    <button @click="changeCountProduct(-1)">-</button>
    <span class="title title-h4">{{productStore.countProduct}}</span>
    <button @click="changeCountProduct(1)">+</button>
  </CounterProduct>
</template>

<script setup lang="ts">
import CounterProduct from "../../entities/CounterProduct";
import {useProductStore} from "~/features/product/product";

const productStore = useProductStore()
function changeCountProduct(count: number) {
  productStore.changeCountProduct(count)

}
</script>

<style lang="scss" scoped>
  button {
    height: 100%;
    cursor: pointer;
    border: none;
  }
</style>