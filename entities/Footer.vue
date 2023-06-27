<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer_list">
        <li class="footer_list-item">
          <ul>
            <li>
              <div class="logo"><img src="@/assets/img/logo.svg" alt=""></div>
            </li>
            <li class="text text-s">Фабрика G&G. 2022</li>
            <li class="text text-s">Фабрика G&G. 2022</li>
          </ul>
        </li>

        <li class="footer_list-item">
          <ul>
            <li><a class="title title-h4" href="#">8 (800) 550-81-79</a></li>
            <li class="text text-s">м. Полежаевская</li>
            <li class="text text-s">
              123154, г. Москва, пр-т. Маршала Жукова, д. 52, "Мебельный Центр"
            </li>
            <li class="text text-s"><a href="#">support@sofiadoors.com</a></li>
          </ul>
        </li>

        <li class="footer_list-item">
          <ul>
            <li v-for="item in 5" :key="item" class="test text-s"><nuxt-link to="/">Межкомнатные двери</nuxt-link></li>
          </ul>
        </li>

        <li class="footer_list-item">
          <ul>
            <li v-for="item in 5" :key="item" class="test text-s"><nuxt-link to="/">Межкомнатные двери</nuxt-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .footer {
    background: #3B3937;
    padding: 100px 0;
    position: relative;
    &:after, &:before {
      content: '';
      display: block;
      background: url("@/assets/img/pattern.png") no-repeat center/cover;
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
  .footer_list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 18px;
  }
  .title, .text {
    color: #fff;
  }
  li {
    color: #fff;
    text-wrap: balance;
  }
</style>