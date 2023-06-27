<template>
  <ButtonUi
      @click.native="popupStore.openPopup(id)"
      :title="title"
  />
  <Popup :id="id">
    <slot/>
  </Popup>
</template>

<script setup lang="ts">
import Popup from "../../entities/Popup";
import ButtonUi from "~/shared/ui/ButtonUi.vue";
import {usePopupStore} from "~/features/Popup/popup";
import {defineProps} from "@vue/runtime-core";
interface IProps {
  id: number
  title: string
}
const props = defineProps<IProps>()
const popupStore = usePopupStore()
</script>

<style lang="scss" scoped>

</style>