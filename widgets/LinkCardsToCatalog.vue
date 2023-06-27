<template>
  <section class="cards">
    <div class="container container-grid">
      <LinkCardToPage/>
      <LinkCardToPage/>
    </div>
  </section>
</template>

<script setup lang="ts">
import LinkCardToPage from "../entities/LinkCardToPage";

</script>

<style lang="scss" scoped>
  .container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
</style>