<template>
  <div class="slider">
    <div class="slides_main"><img :src="mainImage" alt=""></div>
    <div class="slides">
      <ChooseMainImage
          v-for="(image, index) of images"
          :index="index"
          :image="image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChooseMainImage from "~/features/product/ChooseMainImage.vue";

interface IProps {
  images: string[]
  mainImage: string
}
const props = defineProps<IProps>()

</script>

<style lang="scss" scoped>
  .slider {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .slides {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    &_main {
      border: 1px solid #DADADA;
      height: 540px;
    }
  }
  .slide {
    padding: 5px;
    height: 100px;
    &:first-child {
      border: 1px solid;
    }
  }
</style>