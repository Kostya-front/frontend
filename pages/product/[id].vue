<template>
  <div class="page">
    <div class="container container-grid">
      <ProductSlider
          :main-image="productStore?.mainImage"
          :images="product?.product?.images"
          style="grid-area: slider"
      />

      <div class="product_info">
        <h3 class="title title-h3">
          {{product?.product?.title}}
        </h3>

        <GetVariables :id="route.params.id"/>

        <div class="price inner_container">
          <span class="title title-h1">{{product?.product?.price_with_discount}} ₽</span>

          <div class="buttons">
            <ChangeCountProduct/>

            <ChangePopup v-if="!authStore.isAuth" title="Купить" :id="1232321312">
              <AuthPopup/>
            </ChangePopup>

            <SetCountProduct v-else :product-id="route.params.id"/>
          </div>
        </div>

        <div class="description inner_container">
          <h4 class="title title-h4">Описание</h4>
          <p class="text text-m">
            {{product?.description}}
          </p>
        </div>

       <GetCharacteristics :id="route.params.id"/>
      </div>
    </div>

    <FormRequest/>
  </div>
</template>

<script setup lang="ts">
import ProductSlider from "../../entities/ProductSlider";
import VariableProduct from "~/entities/VariableProduct.vue";
import ButtonUi from "~/shared/ui/ButtonUi.vue";
import FormRequest from "~/widgets/FormRequest.vue";
import {useProductStore} from "~/features/product/product";
import {useRoute} from "vue-router";
import GetVariables from "~/features/variable/GetVariables.vue";
import GetCharacteristics from "~/features/GetCharacteristics.vue";
import ChangeCountProduct from "~/features/product/ChangeCountProduct.vue";
import SetCountProduct from "~/features/product/SetCountProduct.vue";
import {onUnmounted} from "@vue/runtime-core";
import {useAuthStore} from "~/features/auth/auth";
import ChangePopup from "~/features/Popup/ChangePopup.vue";
import AuthPopup from "~/widgets/AuthPopup.vue";
const route = useRoute()
const productStore = useProductStore()
const authStore = useAuthStore()

const product = productStore.product

if(typeof route.params.id === 'string') {
  await productStore.getOneById(route.params.id)
}

onUnmounted(() => {
  productStore.resetCountProduct()
})
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    flex-direction: column;
    gap: 90px;
    padding: 50px 0 90px;
  }
  .container-grid {
    display: grid;
    grid-template-areas: "slider info" "slider info";
    grid-template-columns: 40% 50%;
    gap: 30px;
  }
  .inner_container {
    padding-bottom: 35px;
    border-bottom: 1px solid #DADADA;
  }
  .product_info {
    grid-area: info;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .variables {
    grid-area: variables;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 100%;
  }
  .description {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>