<template>
  <div class="container container-flex">
    <h1 class="title title-h1">Каталог</h1>

    <CatalogCards/>
  </div>
</template>

<script setup lang="ts">

import CatalogCards from "~/widgets/CatalogCards.vue";
</script>

<style lang="scss" scoped>
  .container-flex {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 90px 0;
  }
</style>