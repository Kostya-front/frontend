<template>
  <input
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      :class="{error: isEmpty && !modelValue}"
      class="input"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string
  placeholder: string
  isEmpty?: boolean
}
const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
  .error {
    border: 1px solid red;
  }
</style>