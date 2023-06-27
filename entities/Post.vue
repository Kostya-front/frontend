<template>
  <div class="post">
    <div class="post_bg"></div>

    <div class="post_text inner_padding">
      <h5 class="title title-h5">
        {{post?.title}}
      </h5>

      <p class="text text-xsbold">
        {{post?.short_description}}
      </p>
    </div>

    <div class="post_bottom inner_padding">
      <nuxt-link class="link text text-xsbold">
        Читать далее
      </nuxt-link>

      <span class="date text text-xs">
        {{createDatePost(post?.createdAt)}}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import createDatePost from "~/features/post/createDatePost";
import {IPost} from "~/features/post/post";
interface IProps {
  post: IPost
}
const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
  .link {
    color: #B14101;
  }
  .post {
    display: grid;
    grid-template-rows: 180px auto max-content;
    border: 1px solid #DADADA;
    height: 100%;
    &_bg {
      background: url("@/assets/img/post.png") no-repeat center/cover;
    }
    &_text {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    &_bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .inner_padding {
    padding: 30px;
  }
  .date {
    color: #3B3937;
  }
</style>