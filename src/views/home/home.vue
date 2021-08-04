<template>
  <div id="home" class="wrapper">
    
    <navBar class="nav-bar">
      
      <template v-slot:center><p>首页</p></template>
      
    </navBar>

    
      

    <tabcontrol class="tab-control-other" :titles="['流行','新款','精选']" @tabClick='tabClick' ref="tabcontrol1"  v-show="isTabShow"></tabcontrol>


    <scroll class="content" ref="scroll" :probetype="3" :pullupload="true" :click="true" @getPosition='getPosition' @pullingUp='loadMore'>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommend" :style="{backgroundColor:'white'}"></recommend-view>

      <feature :style="{backgroundColor:'white'}"></feature>
      <tabcontrol class="tab-control" :titles="['流行','新款','精选']" @tabClick='tabClick' ref="tabcontrol2"></tabcontrol>

      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    
    <skip-top @click='skipTopClick' v-show="isShowTopSkip"></skip-top>
    

  </div>
</template>

<script>

import homeRequest from '../../network/home'   //导入首页数据

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
      currentType:'pop',
      isShowTopSkip:false,
      tabOffsetTop:0,
      isTabShow:false,
      saveY:null
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
  mounted(){
    setTimeout(()=>{this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop
    ;}
    ,2000)
    
  },
  unmounted(){
    console.log('home destroyed');
  },
  activated(){
    console.log('启动:'+this.saveY);
    
    
      
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)     //页面转换可能会自动跳回首页顶部
    
    var i = setInterval(() => {             //开启定时器检测是否跳回
      
      if(this.$refs.scroll.scroll.y==null){   //避免第一次挂载首页开启定时器

        clearInterval(i)
        console.log('定时器关闭...');
      }

      if(this.$refs.scroll.scroll.y!=this.saveY){        //检测是否发生了跳动
        clearInterval(i)
        console.log('定时器关闭...');
        this.$refs.scroll.scroll.scrollTo(0,this.saveY,100)       //小概率失败返回原位置
        setTimeout(() => {
          if(this.$refs.scroll.scroll.y!=this.saveY){      //避免返回原位置失败，再次检测
            this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
          }
        }, 1000);
        
      }
      

    }, 1000);

    
    
    
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
    console.log('离开:'+this.saveY);
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
        console.log(value);
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
        this.$refs.tabcontrol1.currentIndex = index
        this.$refs.tabcontrol2.currentIndex = index
    },

    skipTopClick(){
      console.log('top');
      console.log(this.$refs.scroll.msg);
      console.log(this.$refs.scroll.scroll);
      this.$refs.scroll.scroll.scrollTo(0,0,1000)
      
    },

    getPosition(position){     //获取滚动条y值并比较值
      if(position.y < -1000){
        this.isShowTopSkip = true
      }
      else{
        this.isShowTopSkip = false
      }   
      
      this.isTabShow = (position.y < -this.tabOffsetTop-44); 
      
    },

    loadMore(){
      this.getGoodsData(this.currentType)

      this.$refs.scroll.scroll.refresh()  //重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
    }
  }
}
</script>

<style scoped>


  #home{
    height: 100vh;
    
  }
  .nav-bar{
    background: rgb(255, 87, 115);
    color: white;
    
  }
  .tab-control-other{
    position: relative;
    z-index: 5;
    top: -44px;
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
