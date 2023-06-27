<template>
  <div class="variable">
    <span class="text text-lbold">{{variable?.title}}</span>

    <ul class="list">
      <slot/>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {IVariable} from "~/features/variable/variable.model";

interface IProps {
  variable: IVariable
}
const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
  .variable {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .list {
    display: flex;
    gap: 7px;
    &_item {
      height: 52px;
      width: 52px;
      border-radius: 50%;
    }
  }
</style>