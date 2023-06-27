<template>
  <Header/>
  <slot/>
  <Footer/>
</template>

<script setup lang="ts">
import Header from "../entities/Header";
import Footer from "~/entities/Footer.vue";
</script>

<style lang="scss" scoped>

</style>