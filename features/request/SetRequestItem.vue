<template>
  <InputUI
      :placeholder="placeholder"
      :is-empty="isEmpty"
      v-model="requestStore.request[value]"
  />
</template>

<script setup lang="ts">
import InputUI from "../../shared/ui/InputUI";
import {useRequestStore} from "~/features/request/request";

interface IProps {
  placeholder: string
  value: string
  isEmpty: boolean
}
const props = defineProps<IProps>()
const requestStore = useRequestStore()
</script>

<style lang="scss" scoped>

</style>