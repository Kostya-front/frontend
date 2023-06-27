<template>
  <div class="products">
    <GetProducts :id="id"/>
  </div>
</template>

<script setup lang="ts">
import GetProducts from "~/features/product/GetProducts.vue";
interface IProps {
  id: number
}
const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
  .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    grid-area: products;
  }
</style>