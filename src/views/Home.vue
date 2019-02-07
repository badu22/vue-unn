<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomePageComponent msg="Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomePageComponent from '@/components/HomePageComponent.vue'

export default {
  name: 'home',
  components: {
    HomePageComponent
  }
}
</script>
