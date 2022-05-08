<template>
  <Swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <SwiperSlide v-for="(item,index) in list" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Pagination, Navigation, Autoplay } from "swiper"
import "swiper/css"

import "swiper/css/pagination"
import "swiper/css/navigation"
import "./style.css"

export default{
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(){
    return {
      modules: [Pagination, Navigation, Autoplay]
    }
  },
  props:{
    list:{
      type:Array,
      default:[]
    }
  },
}

</script>