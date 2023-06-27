<template>
  <ProductCard
      v-for="product of productStore?.products"
      :product="product"
      :key="product?.id"
  >
    <CreateBasketItem :product-id="product?.id"/>
  </ProductCard>
</template>

<script setup lang="ts">
import {useProductStore} from "~/features/product/product";
import ProductCard from '@/entities/ProductCard'
import CreateBasketItem from "~/features/basket/CreateBasketItem.vue";

interface IProps {
  id: number
}
const props = defineProps<IProps>()
const productStore = useProductStore()

await productStore.getFilteredProducts(props.id)
</script>

<style lang="scss" scoped>

</style>