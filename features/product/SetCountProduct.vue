<template>
  <ButtonUi @click.native="setCountProduct(productId)" title="купить"/>
</template>

<script setup lang="ts">
import ButtonUi from '@/shared/ui/ButtonUi'
import {useBasketStore} from "~/features/basket/basket";
import {useProductStore} from "~/features/product/product";
interface IProps {
  productId: number
}
const props = defineProps<IProps>()
const basketStore = useBasketStore()
const productStore = useProductStore()
function setCountProduct(productId: number) {
  basketStore.setCountProduct(productId, productStore.countProduct)
}
</script>

<style lang="scss" scoped>

</style>