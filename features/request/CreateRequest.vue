<template>
  <form @submit.prevent="createRequest" class="form">
    <SetRequestItem placeholder="Введите ваше имя" value="name" :is-empty="requestStore.isEmpty"/>
    <SetRequestItem placeholder="Введите ваш телефон" value="phone" :is-empty="requestStore.isEmpty"/>
    <ButtonUi title="Связаться с нами"/>
  </form>
</template>

<script setup lang="ts">
import ButtonUi from '@/shared/ui/ButtonUi'
import SetRequestItem from '@/features/request/SetRequestItem'
import {useRequestStore} from "~/features/request/request";

const requestStore = useRequestStore()

function createRequest() {
  requestStore.createRequest()
  requestStore.resetForm()
}
</script>

<style lang="scss" scoped>
  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
  }
</style>