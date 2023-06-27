<template>
  <table>
    <thead>
    <tr>
      <th class="text text-l">Изображение</th>
      <th class="text text-l">Название</th>
      <th class="text text-l">Количество</th>
      <th class="text text-l">Цена за шт.</th>
      <th class="text text-l">Всего</th>
    </tr>
    </thead>

    <tbody>
    <tr
        v-for="item of items"
        :key="item.id"
    >
      <td><div class="image"><img src="@/assets/img/product_card.png" alt=""></div></td>
      <td class="text text-l">{{item.product.title}}</td>
      <td class="td-counter text text-l">
        <SetCountInBasket :basket-item="item">
          <DeleteBasketItem :basket-item-id="item.id"/>
        </SetCountInBasket>
      </td>
      <td class="text text-l">{{item?.product?.price_with_discount}}р</td>
      <td class="text text-l">{{item?.sum * item?.count}}р</td>
      <nuxt-link :to="'/product/' + item.productId"></nuxt-link>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import {IBasketItem} from "~/features/basket/basket";
import ChangeCountProduct from "~/features/product/ChangeCountProduct.vue";
import SetCountInBasket from "~/features/product/SetCountInBasket.vue";
import DeleteBasketItem from "~/features/basket/DeleteBasketItem.vue";
import {useRouter} from "vue-router";

interface IProps {
  items: IBasketItem[]
}
const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
  table {

    border-spacing: 10px;
    width: 100%;
  }
  tbody {

  }
  tr {
    position: relative;
    cursor: pointer;
    & a {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
  .image {
    height: 70px;
    width: 70px;
  }
  .td-counter {
    position: relative;
    z-index: 10;
  }
</style>