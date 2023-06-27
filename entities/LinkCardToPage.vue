<template>
  <div class="card">
    <nuxt-link class="link_transition" to="/catalog/"></nuxt-link>
    <div class="card_bg"></div>

    <h3 class="title title-h3">Двери на заказ</h3>

    <p class="text text-m">
      На собственной фабрике мы создаем красивые,
      безопасные и практически вечные двери, межкомнатные перегородки,
      стеновые панели и другие решения для вашего интерьера.
    </p>

    <nuxt-link class="link button" to="/">заказать уникальную дверь</nuxt-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .card {
    display: grid;
    grid-template-rows: 300px max-content max-content max-content;
    gap: 20px;
    position: relative;
    border-bottom: 1px solid #DADADA;
    padding-bottom: 19px;
    &_bg {
      background: url("@/assets/img/card_bg.png") no-repeat center/cover;
    }
  }
  .text {
    text-align: start;
  }
  .link {
    color: #B14101;
    align-self: flex-end;
    justify-content: flex-end;
    &_transition {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>