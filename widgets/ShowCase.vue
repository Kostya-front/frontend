<template>
  <section class="showcase">
    <div class="container container-flex">
      <h1 class="title title-h1">Витрина товаров</h1>

      <GetCategories/>

      <div class="cards">
        <GetProducts/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GetProducts from "~/features/product/GetProducts.vue";
import GetCategories from "~/features/category/GetCategories.vue";

</script>

<style lang="scss" scoped>
  .container-flex {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }
</style>