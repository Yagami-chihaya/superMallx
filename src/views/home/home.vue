<template>
  <div id="home" class="wrapper">
    
      <navBar class="nav-bar">
      
      <template v-slot:center><p>首页</p></template>
      
      </navBar>


    <scroll class="content" ref="scroll">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommend"></recommend-view>

      <feature></feature>
      <tabcontrol class="tab-control" :titles="['流行','新款','精选']" @tabClick='tabClick'></tabcontrol>

      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    
    <skip-top @click='skipTopClick'></skip-top>
    

  </div>
</template>

<script>

import homeRequest from '../../network/home'   //导入首页数据组件

import homeSwiper from '../home/childComponent/homeSwiper.vue'  //轮播图组件
import navBar from '../../components/common/navBar/NavBar.vue'  //顶端功能栏组件

import recommendView from '../home/childComponent/RecommendView.vue' //商品活动组件
import feature from './childComponent/FeatureView.vue'    //'本周流行'组件
import tabcontrol from '../../components/content/tabControl/TabControl.vue' //导航栏组件

import goodsList from '../../components/content/goodsList/GoodsList.vue'    //商品栏组件
import goodsListItem from '../../components/content/goodsList/GoodsListItem.vue'  //单件商品组件

import scroll from '../../components/common/scroll/Scroll.vue' //滚动条组件

import skipTop from '../../components/common/skipTop/SkipTop.vue'  //跳转顶部组件

export default {
  el: '',
  
  data () {
    return {
      
      banners:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop'
      
    }
  },
  
  components:{
    navBar,
    homeSwiper,
    recommendView,
    feature,
    tabcontrol,
    goodsList,
    goodsListItem,
    scroll,
    skipTop
  },
  created(){
    //获取首页需要的数据
    this.getHomeData()


    //获取商品数据
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
    
  },
  methods: {
    getHomeData(){
      homeRequest.createHomeRequest()
      .then(value=>{
      console.log(value);
      this.banners = value.data.data.banner
      
      console.log(this.banners);

      this.recommend = value.data.data.recommend

      console.log(this.recommend);
      })
      .catch(err=>{console.log(err);})
    },


    getGoodsData(type){
      let page = this.goods[type].page+1
      homeRequest.createGoodsRequest(type,page)
      .then(value=>{
        console.log(value.data.data.list);
        this.goods[type].list.push(...value.data.data.list)
        this.goods[type].page = page
      })
    },

    
    tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
    },

    skipTopClick(){
      console.log('top');
      console.log(this.$refs.scroll.msg);
      console.log(this.$refs.scroll.scroll);
      this.$refs.scroll.scroll.scrollTo(0,0,1000)
      
    }
  }
}
</script>

<style scoped>


  #home{
    height: 100vh;
    
  }
  .nav-bar{
    background: pink;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
  .content{
    height: calc(100% - 93px);
    position: absolute;
    top: 44px;
  }
  .wrapper{
    height: 100%;
    
  }
</style>
