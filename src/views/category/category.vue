<template>
<div class="warpper" >
  <div class="content">
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
  </div>
</div>
  
</template>

<script>
import bsscroll, { PullUpLoad } from 'better-scroll'
export default {
  el: '',
  data () {
    return {
      scroll:null
    }
  },
  methods: {
    
      
      
    
  },
  mounted(){
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
    })
  }
}
</script>

<style>
  .warpper{
    height: 150px;
    background: blueviolet;
    overflow: hidden;
  }
  .content{

  }
</style>
