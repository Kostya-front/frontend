<template>
  <form
      @submit.prevent="authStore.register"
      class="form"
  >
    <InputUi v-model="authStore.authDate.username" placeholder="Имя пользователя"/>
    <InputUi v-model="authStore.authDate.email" placeholder="Емайл"/>
    <InputUi v-model="authStore.authDate.password" placeholder="Пароль"/>
    <ButtonUi title="Войти"/>
  </form>
</template>

<script setup lang="ts">
import InputUi from '~/shared/ui/InputUI.vue'
import {useAuthStore} from "~/features/auth/auth";
import ButtonUi from "~/shared/ui/ButtonUi.vue";

const authStore = useAuthStore()
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    width: 100%;
  }
}
</style>