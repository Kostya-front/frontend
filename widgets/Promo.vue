<template>
  <section class="promo">
    <div class="promo_bg"></div>
    <div class="promo_text">
      <h3 class="title title-h3">Classic Wood Stile</h3>
      <h4 class="title subtitle title-h4">enterior-exterior</h4>
      <p class="text text-mbold">Приглашает к сотрудничеству архитекторов, дизайнеров и строителей</p>
      <ButtonUi title="подробнее"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonUi from "../shared/ui/ButtonUi";

</script>

<style lang="scss" scoped>
  .promo {
    padding: 20px;
    position: relative;
    &_bg {
      background: url("@/assets/img/promo_bg.png") no-repeat center/cover;
      width: 100%;
      height: 100%;
      min-height: 700px;
    }
    &_text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(0deg, rgba(198, 156, 109, 0.05), rgba(198, 156, 109, 0.05)), rgba(51, 51, 51, 0.5);
      backdrop-filter: blur(3.5px);
      border-radius: 50%;
      width: 440px;
      height: 440px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      gap: 15px;
    }
  }
  .title {
    color: #fff;
  }
  .subtitle {
    color: #FFD6A8;
  }
  .text {
    color: #ffffff;
  }
  .button {
    margin-top: 20px;
  }
</style>