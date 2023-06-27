<template>
  <header class="header">
    <div class="container container-grid">
      <nuxt-link class="logo" to="/">
        <img src="@/assets/img/logo.svg" alt="">
      </nuxt-link>

      <nav class="nav">
        <ul class="list">
          <li class="list_item text text-m">
            <nuxt-link to="/">Доставка</nuxt-link>
          </li>

          <li class="list_item text text-m">
            <nuxt-link to="/">Статьи</nuxt-link>
          </li>

          <li class="list_item text text-m">
            <nuxt-link to="/">О нас</nuxt-link>
          </li>

          <li class="list_item text text-m">
            <nuxt-link to="/">Контакты</nuxt-link>
          </li>
        </ul>
      </nav>

      <a class="link text text-m" href="/">support@sofiadoors.com</a>

      <a class="link_phone title title-h5" href="/">8 (800) 550-81-79</a>

      <div v-if="authStore.isAuth" class="basket">
        <span class="text text-l">{{basketStore.totalCountBasket}}</span>
        <ButtonUi
            @click.native="router.push('/basket')"
            title="Корзина"
        />
      </div>

      <ChangePopup v-if="!authStore.isAuth" :id="1" title="Войти">
        <AuthPopup/>
      </ChangePopup>

      <ButtonUi
          @click.native="logout"
          v-else
          title="Выйти"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import ChangePopup from "~/features/Popup/ChangePopup.vue";
import AuthPopup from "~/widgets/AuthPopup"
import {useAuthStore} from "~/features/auth/auth";
import ButtonUi from "~/shared/ui/ButtonUi.vue";
import {useBasketStore} from "~/features/basket/basket";
import {useRouter} from "vue-router";

const authStore = useAuthStore()
const basketStore = useBasketStore()
const router = useRouter()

function logout() {
  authStore.logout()
}
</script>

<style lang="scss" scoped>
  .container-grid {
    display: grid;
    grid-template-columns: repeat(6, max-content);
    align-items: center;
    justify-content: space-between;
  }
  .header {
    background: #3B3937;
    padding: 30px 0;
  }
  .list {
    display: flex;
    gap: 16px;
    &_item {
      color: #fff;
    }
  }
  .link {
    color: #FFD6A8;
  }
  .link_phone {
    color: #FFD6A8;
  }
  .basket {
    position: relative;
    & span {
      display: block;
      position: absolute;
      padding: 5px;
      right: 0;
      top: -25%;
      width: 25px;
      height: 25px;
      background: #B14101;
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>