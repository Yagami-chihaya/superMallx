<template>
  <div id="detail">
    
    <detailnav class="nav-bar" @getNavIndex='titleClick' ref="nav"></detailnav>
    <scroll class="scroll" :probetype="3" :click="true" :pullupload="true" ref="scroll" @getPosition='autoChangeTitle'>
      
      <detail-swiper :imgData="imgData"></detail-swiper>
      <shop-info :goods="goods"></shop-info>
      <detail-goods-info :detailInfo="goods.detailInfo"></detail-goods-info>
      <detail-param-info ref="param" :rule='goodsParams.rule' :info='goodsParams.info'></detail-param-info>
      <detail-comment ref="comment" :goodsComments="goodsComments"></detail-comment>
      
      <goodslist ref="recomment" :goods="goodsRecomment">
        
      </goodslist>
    </scroll>
    <back-top @click='skipTopClick' v-show="isShowTopSkip"></back-top>
    <detail-bottom-bar @addCart='addCart'></detail-bottom-bar>
    <toast message='加入购物车成功!' :class="toastIsActive?'active':''"></toast>
  </div>
</template>

<script>
import detailnav from '../detail/childComponents/DetailNav.vue'
import {createDetailInfo,Goods,GoodsParams,GoodsComments,getRecommends} from '../../network/detail'
import detailSwiper from '../detail/childComponents/DetailSwiper.vue'
import shopInfo from '../detail/childComponents/detailShopInfo/DetailShopInfo.vue'
import scroll from '../../components/common/scroll/Scroll.vue'
import DetailGoodsInfo from '../detail/childComponents/DetailGoodsInfo.vue'
import DetailParamInfo from '../detail/childComponents/DetailParamInfo.vue'
import DetailComment from '../detail/childComponents/DetailComment.vue'
import goodslist from '../../components/content/goodsList/GoodsList.vue'
import detailBottomBar from '../../views/detail/childComponents/DetailBottomBar.vue'
import backTop from '../../components/common/skipTop/SkipTop.vue'

import {mapActions} from 'vuex'

import toast from '../../components/common/toast/Toast.vue'

export default {
  el: '',
  data () {
    return {
      iid:null,
      imgData:null,

      
      goods:{},
      goodsParams:{},
      goodsComments:{},

      goodsRecomment:{},
      titleSkipTop:[],

      isShowTopSkip:false,

      toastIsActive:false,
    }
  },
  
  activated(){
    
    this.iid = this.$route.params.iid
    createDetailInfo(this.iid).then(value=>{console.log(value);console.log('www'+this.goods);});

    createDetailInfo(this.iid).then(res=>{
      this.imgData = res.data.result.itemInfo.topImages
      console.log(this.imgData);
      
    }) 

    createDetailInfo(this.iid).then(res=>{
      this.goods = new Goods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo,res.data.result.detailInfo)
      this.goodsParams = new GoodsParams(res.data.result.itemParams)
      this.goodsComments = new GoodsComments(res.data.result.rate)
      console.log('被执行了');
    })

    getRecommends().then(res=>{
      this.goodsRecomment = res.data.data.list
      console.log(res);
    })

    this.$nextTick(()=>{
        setTimeout(()=>{
          
          this.titleSkipTop = [0,this.$refs.param.$el.offsetTop,this.$refs.comment.$el.offsetTop,this.$refs.recomment.$el.offsetTop]
          console.log(this.titleSkipTop);
        },2000)
        
      })

    
  },
  deactivated(){
    
  },
  methods: {
    ...mapActions(['addCart2']),
    titleClick(index){
      console.log(index);
      this.$refs.scroll.scroll.scrollTo(0,-this.titleSkipTop[index],500)
    },
    autoChangeTitle(position){
      if(position.y<=-this.titleSkipTop[3]){
        this.$refs.nav.currentIndex = 3
      }
      else if(position.y<=-this.titleSkipTop[2]){
        this.$refs.nav.currentIndex = 2
      }
      else if(position.y<=-this.titleSkipTop[1]){
        this.$refs.nav.currentIndex = 1
      }
      else this.$refs.nav.currentIndex = 0

      if(position.y<=-400){
        this.isShowTopSkip = true
      }else this.isShowTopSkip = false
    },
    skipTopClick(){
      console.log('top');
      console.log(this.$refs.scroll.msg);
      console.log(this.$refs.scroll.scroll);
      this.$refs.scroll.scroll.scrollTo(0,0,1000)
    },
    addCart(){
      const product = {}
      product.iid = this.iid
      product.img = this.imgData[0]
      product.desc = this.goods.desc
      product.title = this.goods.title
      product.price = this.goods.lowPrice
      product.count = 0
      

      //将商品添加到购物车
      //1.不使用映射
      /*this.$store.dispatch('addCart2',product).then(res=>{
        console.log(res);        
      })*/
      //2.使用map映射
      this.addCart2(product).then(
        
        this.toastIsActive = true,
        
        show = setTimeout(()=>{
          this.toastIsActive = false
        },2000)
      )
    } 
  },
  components:{
    detailnav,
    detailSwiper,
    shopInfo,
    scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    goodslist,
    detailBottomBar,
    backTop,
    toast,
  }
}
</script>

<style>
  .nav-bar{
    position: relative;
    z-index: 9;
    background: white;
  }
  #detail{
    position: relative;
    height: 100vh;
    z-index: 9;
    background: white;
  }
  .scroll{
    height: calc(100% - 93px);
    position: absolute;
    top: 44px;
    background: white;
  }
</style>
