<template>
  <div class="variables">
    <VariableProduct
        v-for="variable of variableStore?.variables"
        :variable="variable"
        :key="variable"
    >
      <li
          v-for="item of variable?.variableItems"
          @click="getVariableData(item.id)"
          :key="item.id"
          :style="{background: createColor()}"
          class="list_item"
      >
      </li>
    </VariableProduct>
  </div>
</template>

<script setup lang="ts">
import VariableProduct from '@/entities/VariableProduct'
import {useVariableStore} from "~/features/variable/variable.model";
import createColor from "~/features/variable/helpers/createColor";
interface IProps {
  id: string
}
const variableStore = useVariableStore()

const props = defineProps<IProps>()

function getVariableData(variableItemId: number) {
  variableStore.getVariableData(variableItemId)
}
await variableStore.getVariables(props.id)
</script>

<style lang="scss" scoped>
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