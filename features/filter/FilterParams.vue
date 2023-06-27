<template>
  <div class="params">
    <span class="text text-lbold">{{title}}</span>
    <ul class="params_list">
      <li
          v-for="item of characteristics"
          @click="sendQuery(title, item.value)"
          :class="{active:filter[title].includes(item.value)}"
          :key="item.id"
          class="params_list-item text text-m"
      >
        {{item.value}}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useCharacteristicStore} from "~/features/characteristic/characteristic";
import {computed} from "@vue/reactivity";
import {useRouter} from "vue-router";
import {useFilterStore} from "~/features/filter/filter";
import {useProductStore} from "~/features/product/product";
import {useCategoryStore} from "~/features/category/category";

interface IProps {
  title: string
  categoryId: number
}
const props = defineProps<IProps>()
const characteristicStore = useCharacteristicStore()
const filterStore = useFilterStore()
const productStore = useProductStore()
const router = useRouter()

const filter = filterStore.queryFilter

async function sendQuery(key: string, value: string) {
  if(filter[key].includes(value)) {
    filter[key] = filter[key].filter((item: string) => item !== value)
  }
  else {
    filter[key].push(value)
  }

  await Promise.resolve().then(() => {
    router.push({
      path: `/catalog/${props.categoryId}`,
      query: filter
    })
  })

  await productStore.getFilteredProducts(props.categoryId)
}

const characteristics = computed(() => {
  return characteristicStore.characteristics.filter(characteristic => characteristic.key === props.title)
})
</script>

<style lang="scss" scoped>
  .params {
    display: flex;
    flex-direction: column;
    gap: 15px;
    &_list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:after {
          content: '';
          display: block;
          width: 20px;
          height: 20px;
          border: 1px solid #3B3937;
        }
      }
    }
  }
  .active {
    color: #B14101;
  }
</style>