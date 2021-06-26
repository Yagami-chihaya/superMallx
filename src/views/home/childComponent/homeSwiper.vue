<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners.list" :key="index.title">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
export default {
  el: '',
  props:{
    banners:String
  },
  data () {
    return {
      
    }
  },
  methods: {

  },
  components:{
    SwiperItem,
    Swiper
  }
}
</script>

<style scoped>

</style>
