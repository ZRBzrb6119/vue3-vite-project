<template>
  <TypeNav />
  <ListContainer />
  <Recommend />
  <Rank />
  <Like />
  <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
  <Brand />
</template>

<script setup>
import ListContainer from './listContainer/index.vue'
import Recommend from './recommend/index.vue'
import Rank from './rank/index.vue'
import Like from './like/index.vue'
import Floor from './floor/index.vue'
import Brand from './brand/index.vue'

import {computed,onMounted} from 'vue'
import {useStore} from 'vuex'

const store=useStore()

onMounted(()=>{
  store.dispatch("getFloorList")
  store.dispatch('getUserInfo')
})

const floorList=computed(()=>store.state.home.floorList)

</script>
<style scoped>
</style>