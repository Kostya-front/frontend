<template>
  <div
      v-if="popupStore.isVisible && popupStore.popupId === id"
      class="popup"
  >
    <div @click="popupStore.closePopup()" class="bg"></div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {usePopupStore} from "~/features/Popup/popup";

interface IProps {
  id: number
}
const props = defineProps<IProps>()
const popupStore = usePopupStore()
</script>

<style lang="scss" scoped>
  .popup {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.84);
    left: 0;
    top: 0;
  }
</style>