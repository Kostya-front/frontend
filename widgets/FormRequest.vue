<template>
  <section class="request">
    <div class="container container-grid">
      <div class="bg"></div>
      <div class="request_info">
        <h1 class="title title-h1">
          Нужна помощь с выбором?
        </h1>

        <p class="subtitle title title-h5">
          Наши специалисты с радостью помогут Вам, оставьте свой номер телефона!
        </p>

        <CreateRequest/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import InputUI from "~/shared/ui/InputUI.vue";
import ButtonUi from "~/shared/ui/ButtonUi.vue";
import SetRequestItem from "~/features/request/SetRequestItem.vue";
import CreateRequest from "~/features/request/CreateRequest.vue";

</script>

<style lang="scss" scoped>
  .container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 600px;
  }
  .request {
    &_info {
      padding: 90px 70px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
  .bg {
    background: url("@/assets/img/bg2.png") no-repeat center/cover;
  }
  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
  }
</style>