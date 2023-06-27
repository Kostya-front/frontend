<template>
  <div class="window">
    <div class="tabs">
      <span
          @click="setTab('авторизация')"
          :class="{'tab_active': tabTitle === 'авторизация'}"
          class="tab title title-h4"
      >
        Авторизация
      </span>

      <span
          @click="setTab('регистрация')"
          :class="{'tab_active': tabTitle === 'регистрация'}"
          class="tab title title-h4"
      >
        Регистрация
      </span>
    </div>

    <LoginUser v-show="tabTitle === 'авторизация'"/>
    <RegisterUser v-show="tabTitle === 'регистрация'"/>
  </div>
</template>

<script setup lang="ts">
import LoginUser from "../features/auth/LoginUser.vue";
import RegisterUser from "~/features/auth/RegisterUser.vue";
import {ref} from "@vue/reactivity";

const tabTitle = ref('авторизация')

function setTab(title: string) {
  tabTitle.value = title
}
</script>

<style lang="scss" scoped>
  .window {
    position: relative;
    background: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .tabs {
    display: flex;
    justify-content: space-around;
    gap: 30px;
  }
  .tab {
    &_active {
      color: #A9845C;
    }
  }
</style>