<template>
  <div class="card">
    <nuxt-link class="link_transition" :to="url"></nuxt-link>
    <div class="card_text">
      <span class="text text-l">{{product?.title}}</span>
      <span class="text text-lbold">{{product?.price_with_discount}} ₽</span>
    </div>

    <div class="card_bg">
      <img src="@/assets/img/product_card.png" alt="">
    </div>

    <div class="card_bottom">
      <ul class="dots">
        <li v-for="item in 5" :key="item" class="dot"></li>
      </ul>

      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {IProduct} from "~/features/product/product";
import {computed} from "@vue/reactivity";

interface IProps {
  product: IProduct
}
const props = defineProps<IProps>()

const url = computed(() => {
  return `/product/${props?.product?.id}`
})
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    gap: 30px;
    border: 1px solid #DADADA;
    padding: 20px;
    position: relative;
    &_bg {
      width: 240px;
      margin: 0 auto;
    }
    &_text {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &_bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 3;
    }
  }
  .dots {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .dot {
    border-radius: 50%;
    height: 8px;
    width: 8px;
    background: gray;
  }
  .link {
    color: #B14101;
    &_transition {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
</style>