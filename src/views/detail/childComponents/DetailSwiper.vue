<template>
  
    <swiper class="swiperBox">
      <swiper-item v-for='item in imgData' :key='item'>
        <img :src="'http:'+item" :class="item">
        
      </swiper-item>
    </swiper>
  
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'


export default {
  el: '',
  props:{
    imgData:{
      type:Array
    }
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
    
  },
  created(){
    console.log(this.imgData); 
  }
  
}
</script>

<style scoped>
  .swiperBox{
    height: 300px;
    overflow: hidden;
  }
</style>
