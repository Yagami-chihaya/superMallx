<template>
  <div class="goodsItem">
    <div>
      <a :href="goodsItem.link">
        <img :src='goodsItem.show.img'>
        <div class="goodsInfo">
          <p class="title">{{goodsItem.title}}</p>
          <span class="price">￥{{goodsItem.price}}</span>
          <span class="colletion"><img src="../../../assets/img/home/collect_icon.png">收藏:{{goodsItem.cfav}}</span>
        </div>
      </a>
    </div>
  </div>
  
</template>

<script>
export default {
  el: '',
  props:{
    goodsItem:Object
  },
  data () {
    return {
      
    }
  },
  methods: {

  },
}
</script>

<style>
  .goodsItem{
    width:100%;
    height: 350px;
    
  }
  .goodsItem>div{
    height: 100%;
    position: relative;
    
  }
  .goodsItem img{
    
    margin-left: 5px;
    width: 150px;
    border-radius: 10px;
  }
  .title{
    font-size: 8px;
    margin-top: 5px;
    color: rgb(105, 95, 0);
  }
  .price{
    position: absolute;
    color: rgb(255, 60, 0);
    bottom: 5px;
    font-weight: bolder;
    font-size: 20px;
  }
  .colletion{
    height: 30px;
    line-height: 30px;
    position: absolute;
    color: rgb(9, 39, 63);
    bottom: 5px;
    right: 10px;
    font-size: 8px;
    
  }
  .colletion img{
    position: relative;
  
    top: 5px;
    width: 20px;

  }
</style>
