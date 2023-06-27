<template>
  <div class="pagination">
    <PaginationItem number="1"/>
    <PaginationItem number="1"/>
    <PaginationItem number="1"/>
    <PaginationItem number="1"/>
    <PaginationItem number="1"/>
    <PaginationItem number="1"/>
    <PaginationItem number="1"/>
    <PaginationItem number="1"/>
  </div>
</template>

<script setup lang="ts">

import PaginationItem from "~/shared/ui/PaginationItem.vue";
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    gap: 15px;
    grid-area: pagination;
    justify-content: center;
  }
</style>