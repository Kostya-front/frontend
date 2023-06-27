<template>
  <div class="characteristics">
    <h4 class="title title-h4">Характеристики</h4>

    <ul class="list">
      <li
          v-for="characteristic of characteristicsStore.productCharacteristics"
          :key="characteristic"
          class="item">
        <span class="text text-l">{{characteristic.key}}</span>
        <span class="text text-l">{{characteristic.value}}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useCharacteristicStore} from "~/features/characteristic/characteristic";
interface IProps {
  id: string
}

const props = defineProps<IProps>()

const characteristicsStore = useCharacteristicStore()

await characteristicsStore.getCharacteristicsByProductId(props.id)
</script>

<style lang="scss" scoped>
  .characteristics {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .list {
    display: flex;
    flex-direction: column;
  }
  .item {
    padding: 15px 0;
    border-bottom: 1px solid #DADADA;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span {
      &:first-child {
        text-transform: uppercase;
      }
    }
  }
</style>