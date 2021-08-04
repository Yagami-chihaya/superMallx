<template>
<div class="category">
  <nav-bar class="navbar">
    <template v-slot:center>
      <p>商品分类</p>
    </template>
  </nav-bar>
  <div class="leftMenu">
    <category-lift-menu></category-lift-menu>
  </div>
  <div class='rightMenu'>
    <category-right-menu></category-right-menu>
  </div>
  
</div>
  
</template>

<script>

import categoryLiftMenu from './childComponets/CategoryLiftMenu.vue'
import navBar from '../../components/common/navBar/NavBar.vue'
import categoryRightMenu from './childComponets/CategoryRightMenu.vue'


export default {
  el: '',
  data () {
    return {
      
    }
  },
  components:{
    categoryLiftMenu,
    navBar,
    categoryRightMenu
  },
  methods: {
    
      
      
    
  },
  mounted(){
    /*
    this.scroll = new bsscroll('.warpper',{
      probeType:3,
      pullUpLoad:true     //开启滚动条位置读取
    })
    this.scroll.on('scroll',(position)=>{
        //console.log(position);
    })
    this.scroll.on('pullingUp',()=>{     //pullingUp事件表示滚动条达到元素的最大高度后处理事件
      console.log('上拉加载更多');
      this.scroll.finishPullUp()        //设置finishPullUp，可以反复刷新
    })*/
  }
}
</script>

<style>
  .warpper{
    height: 150px;
    background: blueviolet;
    overflow: hidden;
  }
  .category{
    height: 100vh;
  }

  .navbar{
    background: rgb(255, 87, 115);
    color: white;
  }

  .leftMenu{
    height: calc(100% - 93px);
    overflow: scroll;
    width: 90px;
    display: inline-block;
  }
  .rightMenu{
    float:right;
    height: calc(100% - 93px);
    width:calc(100% - 90px);
    overflow: scroll;
  }
</style>
