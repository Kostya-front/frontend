<template>
  <div class="count">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .count {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 50px) auto;
    gap: 5px;
    text-align: center;
    align-items: center;
    border: 1px solid #DADADA;
    & button {
      height: 100%;
      cursor: pointer;
      border: none;
    }
  }
</style>