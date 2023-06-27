<template>
  <div class="item text text-m">
    {{number}}
  </div>
</template>

<script setup lang="ts">
interface IProps {
  number: number
}
const props = defineProps<IProps>()
</script>

<style scoped>
  .item {
    background: #3B3937;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    width: 40px;
    height: 40px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>