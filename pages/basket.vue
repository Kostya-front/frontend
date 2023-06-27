<template>
  <div class="container">
    <BasketTable :items="basketStore.basket"/>
  </div>
</template>

<script setup lang="ts">
import BasketTable from "../entities/BasketTable";
import {useBasketStore} from "~/features/basket/basket";
import {onBeforeMount} from "@vue/runtime-core";

const basketStore = useBasketStore()
const items = basketStore.basket

</script>

<style scoped>

</style>