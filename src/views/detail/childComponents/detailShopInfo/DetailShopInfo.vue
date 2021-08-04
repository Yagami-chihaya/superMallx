<template>
  <div>
    <div class="topMenu">
      <p class="title">{{goods.title}}</p>
      <p class="nowPrice">{{goods.nowPrice}}<span class="highPrice">￥{{goods.highPrice}}</span><span class="activePrice" :style="{backgroundColor:goods.discountBgColor}">{{goods.discountDesc}}</span></p>  
      
    </div>
    <div class="middleMenu">
      <div class="columns">
        <span v-for="item in goods.columns" :key="item">{{item}}</span>
      </div>
      
      <div class="promise">
        <span><img src="../../../../assets/img/detail/选中.png">退货补运费</span>
        <span><img src="../../../../assets/img/detail/选中.png">全国包邮</span>
        <span><img src="../../../../assets/img/detail/选中.png">7天无理由退货</span>
      </div>

      <div class="storeInfo">
        <img :src="'https:'+goods.shopLogo">
        <span>{{goods.storeName}}</span>
      </div>
    </div>
    <div class="bottomInfo">
      <div class="leftBottomInfo">
        <div>
          <p class="border">{{(goods.allSells/10000).toFixed(2)}}万</p>
          <p>总销量</p>
        </div>
        <div>
          <p class="border">{{goods.allGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="rightBottomInfo">
        <div v-for="item in goods.score" :key="item">
          <span class="RBIleft">{{item.name}}</span>
          <span :class="{isActive:item.isBetter}" class="RBIcenter">{{item.score}}</span>
          <span :style="{backgroundColor:item.isBetter?'red':'green',color:'white'}" class="RBIright">{{item.isBetter?'高':'低'}}</span>
        </div>
        
      </div>

    </div>
    
  </div>
</template>

<script>


export default {
  el: '',
  data () {
    return {
      
    }
  },
  props:{
    
    goods:{
      type:Object,
      default:{}
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
  .title{
    margin: 0 auto;
    width:95%;
    
    font-size: 14px;
    font-weight: bold;
  }
  
  .nowPrice{
    margin: 5% 3%;
    font-size: 28px;
    color: rgb(255, 59, 98);
    
  }
  .highPrice{
    display: inline;
    font-size:10px ;
    color: rgb(185, 185, 185);
    text-decoration: line-through;
  }
  .activePrice{
    padding: 3px;

    font-size: 16px;
    border-radius: 5px;
    color: white;
    
    margin-bottom: 10px;
    font-weight: bold;
  }

  .middleMenu{
    
  }
  .columns{
    display: flex;
    
    font-size: 12px;
    text-align: center;
    color:rgb(196, 196, 196)
  }
  .columns span{
    flex:1;
  }
  .promise{
    display: flex;
    font-size: 14px;
    border-top: 1px solid rgb(197, 197, 197);
    border-bottom: 1px solid rgb(197, 197, 197);
  }
  .promise span{
    padding-top: 10px;
    padding-bottom: 15px;
    flex:1;
    height: 22px;
    line-height: 22px;
    
  }
  .promise img{
    width:10px;
  }
  .storeInfo{
    margin-top: 20px;
    margin-bottom: 20px;
    height: 50px;
    position: relative;
  }
  .storeInfo span{
    position: absolute;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    top:10px;
    left: 60px;
    color: grey;
  }
  .storeInfo img{
    width: 40px;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: 5px;
    left: 10px;
  }
  .bottomInfo {
    display: flex;
    
  }
  .leftBottomInfo{
    flex: 1;
    width:49%;
    height:60px;
    display: flex;
    border-right: 2.2px solid grey;
  }
  .leftBottomInfo>div{
    
    flex: 1;
  }
  .leftBottomInfo p{
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
  }
  .border{
    font-size: 18px !important;
    font-weight: bold ;
  }
  .rightBottomInfo{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .rightBottomInfo>div{
    display: flex;
    flex:1;
  }
  .rightBottomInfo span{
    
    font-size: 12px;
    
  }
  .rightBottomInfo .RBIleft{
    width: 70px;
    margin-left: 10px;
  }
  .rightBottomInfo .RBIcenter{
    color: green;
    flex: 1;
    margin-left: 5px;
  }
  .rightBottomInfo .RBIright{
    
    width: 12px;
    margin-right:5px
  }
  
  .isActive{
    color: red !important;
    
  }
  
</style>
