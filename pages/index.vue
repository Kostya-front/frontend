<template>
  <div class="container-flex">
    <Promo/>

    <LinkCardsToCatalog/>

    <ShowCase/>

<!--    <FormRequest/>-->

<!--    <Posts/>-->
  </div>
</template>

<script setup lang="ts">
import Promo from "../widgets/Promo";
import LinkCardsToCatalog from "~/widgets/LinkCardsToCatalog.vue";
import ShowCase from "~/widgets/ShowCase.vue";
import FormRequest from "~/widgets/FormRequest.vue";
import Posts from "~/widgets/Posts.vue";

</script>

<style lang="scss" scoped>
  .container-flex {
    display: flex;
    flex-direction: column;
    gap: 90px;
  }
</style>