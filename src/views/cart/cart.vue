<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center><p>购物车({{$store.state.cartList.length}})</p></template>
    </nav-bar>

    
    <scroll class="scroll" :probetype="3" :click="true" :pullupload="true">
      <div class="cartBox">
      
        
        <div class="itemBox" v-for="item in $store.state.cartList" :key="item">
          <img class="chooseItem" @click='chooseItem(item)' :style="item.checked?{backgroundColor:'pink'}:{}" src="../../assets/img/detail/选中.png">
          <img class="itemImg" :src="item.img" alt="">
          <div class="itemInfo">
            <div><span class="itemTitle">{{item.title}}</span><span>...</span></div>
            <div><span class="itemDesc">{{item.desc}}</span><span>...</span></div>
            <span class="itemPrice">￥{{item.price}}</span>
            <span class="itemCount">x{{item.count}}</span>
          </div>
        </div>
      
      
      </div>

    </scroll>

    <div class="cartBottom">
      <div class="checkBox"><img src="../../assets/img/detail/选中.png" @click='chooseAllItem' :style="isActive?{backgroundColor:'pink'}:{}"><span>全选</span></div>
      <div class="allPrice"><p>合计:￥{{allPrice}}</p></div>
      <div class="skipbtn">去结算({{allCount}})</div>
    </div>
  </div>
</template>

<script>
import navBar from '../../components/common/navBar/NavBar.vue'
import scroll from '../../components/common/scroll/Scroll.vue'

export default {
  el: '',
  data () {
    return {
      isActive:true
    }
  },
  computed:{
    allPrice(){
      /*let allPrice = 0
      for (let item of this.$store.state.cartList){
        allPrice+=item.price*item.count
      }
      return allPrice*/
      console.log(this.$store.state.cartList.filter(item=>{
        return item.checked
      }));

      return this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue+item.price * item.count
      },0).toFixed(2)
    },
    allCount(){
      return this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue+item.count
      },0)
    }
  },
  components:{
    navBar,
    scroll,
  },
  methods: {
    chooseItem(item){
      item.checked = !item.checked
      console.log('run');
    },
    chooseAllItem(){
      this.isActive = !this.isActive
      for (let item of this.$store.state.cartList){
        item.checked = this.isActive
      }
    }
  },
}
</script>

<style scoped>

  .nav-bar{
    background: rgb(255, 87, 115);
    color: white;
    z-index: 9;
    
  }

  .cart{
    height: 100vh;
    width: 100vw;
  }
  
  .scroll{
    height: calc(100vh - 123px);
    
    position: absolute;
    top: 44px;
  }


  .cartBox{
    width: 100vw;
  }

  .itemBox {
    position: relative;
    height: 100px;
    width: 100%;
    border-bottom: 1px solid rgb(175, 175, 175);
  }
  .itemBox .chooseItem{
    position: absolute;
    left: 0;
    top:42px;
  }
  .active {
    background-color: pink;
  }
  .itemBox .itemImg{
    width: 60px;
    height: 80px;
    top: 10px;
    left:20px;
    border-radius: 10px;
    position: absolute;
  }
  .itemBox .itemInfo{
    position: absolute;
    left: 90px;
    top: 10px;
    
  }
  .itemBox .itemInfo div{
    height: 20px;
    margin-bottom: 8px;
    
  }
  .itemBox .itemTitle{
    
    display: inline-block;
    font-size: 16px;
    width:81%;
    height: 20px;
    overflow: hidden;
    
  }
  .itemBox .itemDesc{
    display: inline-block;
    font-size:8px;
    width:87%;
    height: 16px;
    overflow: hidden;
    
  }
  .itemPrice{
    height: 20px;
    line-height: 20px;
    color: rgb(255, 60, 0);
    font-size: 16px;
    
  }
  .itemCount{
    height: 20px;
    line-height: 20px;
    position:absolute;
    right: 10px;
    font-size: 16px;
  }
  
  .cartBottom{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    background: rgb(163, 163, 163);
    position: fixed;
    bottom: 48px;
    display: flex;
  }

  .cartBottom div{
    display: inline-block;
    text-align: center;
  }

  .cartBottom .checkBox{
    width: 25%;
    position: relative;
  }
  .cartBottom .checkBox img{
    position: absolute;
    left:8px;
    top:7px;
  }
  .cartBottom .allPrice{
    width: 50%;
    text-align: left;
    
  }
  .cartBottom .skipbtn{
    width: 25%;
    background: orangered;
    color: white;
  }

</style>
