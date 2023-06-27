<template>
  <button class="button">
    {{title}}
  </button>
</template>

<script setup lang="ts">
interface IProps {
  title: string
}
const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
  .button {
    background: #A9845C;
    padding: 10px 15px;
    border: none;
    color: #fff;
    width: max-content;
  }
</style>