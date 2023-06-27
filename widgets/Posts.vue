<template>
  <section class="posts">
    <div class="container container-grid">
      <h1 class="title title-h1">Новые статьи</h1>

      <ButtonUi title="Все статьи"/>

      <ul class="posts_list">
        <li v-for="post of postStore?.posts" :key="post?.createdAt" class="post_item">
          <Post :post="post"/>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonUi from "../shared/ui/ButtonUi";
import Post from "../entities/Post";
import {usePostStore} from "~/features/post/post";

const postStore = usePostStore()

await postStore.getPosts()
</script>

<style lang="scss" scoped>
  .container-grid {
    display: grid;
    grid-template-areas: "title . button" "posts posts posts";
    gap: 40px;
  }
  .title {
    grid-area: title;
  }

  .button {
    grid-area: button;
  }

  .posts {
    padding-bottom: 90px;
    &_list {
      grid-area: posts;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 40px;
    }
  }

</style>