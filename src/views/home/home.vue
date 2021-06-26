<template>
  <div>
    <navBar class="nav-bar">
      
      <template v-slot:center><p>首页</p></template>
      
    </navBar>
    
    <home-swiper :banners="banners"></home-swiper>

    
  </div>
</template>

<script>
import navBar from '../../components/common/navBar/NavBar.vue'
import homeRequest from '../../network/home'
import homeSwiper from '../home/childComponent/homeSwiper.vue'


export default {
  el: '',
  
  data () {
    return {
      
      banners:[],
      recommend:[]
    }
  },
  methods: {

  },
  components:{
    navBar,
    homeSwiper
    
  },
  created(){
    homeRequest.createHomeRequest()
    .then(value=>{
      console.log(value);
      this.banners = value.data.data.banner
      
      console.log(this.banners);

      this.recommend = value.data.data.recommend

      console.log(this.recommend);
    })
    .catch(err=>{console.log(err);})
  }
}
</script>

<style>
  .nav-bar{
    background: pink;
    color: white;
  }
</style>
