<template>
  <div class="page">
    <section class="catalog">
      <div class="container container-grid">
        <GetCategoryTitle :category-id="route.params.id"/>

        <GetFilter
            :id="+route.params.id"
            style="grid-area: filter"
        />

        <CatalogItems :id="+route.params.id"/>

        <Pagination/>

        <div class="catalog_text">
          <h3 class="title title-h3">Двери на заказ</h3>
          <p class="text text-m">
            Двери, представляющие из себя вертикальный прямоугольник, которые стоят в
            большинстве построенных квартир, представляют собой стандартный образец.
            Любые другие, отличающиеся по форме и размерам, считаются нестандартными и
            изготавливаются по заказу. <br><br> Наша компания предлагает услугу изготовления межкомнатных
            дверей на заказ с доставкой в Москве и Московской области. Для того чтобы определиться
            с заказом, необходимо чётко представлять возможности изготовления дверей.
            Изготавливаются они следующим образом: создаётся каркас из недорогой древесины, который
            затем обшивается панелями МДФ. <br> <br>Панели ламинируются плёнкой любых оттенков. Шпонированные
            варианты представляют собой целостный натуральный массив из дерева, покрытый шпоном из МДФ.
            Классические массивные и глухие модели, и лёгкие модели со стеклом, могут быть изготовлены
            из натурального дерева.
            Если Вам необходима модель с эксклюзивным дизайном, можно сделать её по специальному проекту.
            Независимо тот того, в какой ценовой категории будут находиться выбранные вами изделия, все они
            выполнены из качественного материала, надёжны и безопасны.
          </p>
        </div>
      </div>
    </section>

    <FormRequest/>
  </div>
</template>

<script setup lang="ts">

import Pagination from "~/entities/Pagination.vue";
import FormRequest from "~/widgets/FormRequest.vue";
import {useRoute} from "vue-router";
import GetFilter from "~/features/filter/GetFilter.vue";
import CatalogItems from "~/widgets/CatalogItems.vue";
import GetCategoryTitle from "~/features/category/GetCategoryTitle.vue";

const route = useRoute()
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    flex-direction: column;
    gap: 90px;
    padding: 90px 0;
  }
  .container-grid {
    display: grid;
    grid-template-areas:
          "title title title title"
          "filter products products products"
          "filter pagination pagination pagination"
          "filter text text text"
  ;
    gap: 40px;
  }
  .catalog {
    &_text {
      grid-area: text;
      display: flex;
      flex-direction: column;
      gap: 17px;
    }
  }
</style>