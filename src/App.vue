<script setup>
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'
import {useRoute} from 'vue-router'
import {onMounted} from 'vue'
import {useStore} from 'vuex'

const route=useRoute()
const store=useStore()
onMounted(()=>{
  store.dispatch('getCategoryList')
})
</script>

<template>
  <Header/>

  <router-view />

  <Footer v-show="route.meta.show" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
