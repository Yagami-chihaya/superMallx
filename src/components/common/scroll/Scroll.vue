<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bscroll from 'better-scroll'

export default {
  el: '',
  data () {
    return {
      scroll:null,
      msg:'qiaoyang'
    }
  },
  methods: {

  },
  mounted(){
    this.scroll = new bscroll(this.$refs.wrapper,{      //这里使用$ref对元素进行查找，防止选择器冲突
      probeType:3,
      pullUpLoad: true, //开启滚动条位置读取,
      click:true,
      observeDOM:true        //2.0以上版本需要加上，动态刷新DOM
    })
    this.scroll.on('scroll',(position)=>{
      console.log(position);
    }) 
    this.scroll.on('pullingUp',()=>{     //pullingUp事件表示滚动条达到元素的最大高度后处理事件
      console.log('被上拉了');
      this.scroll.finishPullUp()     //设置finishPullUp，可以反复刷新
    })
    
  }
}
</script>

<style>
  

  
</style>
