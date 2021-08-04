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
  props:{
    probetype:{   //选择位置读取类型，0和1似乎都是关闭，2是无惯性位置读取，3是有惯性位置读取
      type:Number,
      default:3
    },
    pullupload:{    //开启滚动条位置读取,
      type:Boolean,
      default:true
    },
    click:{  
      type:Boolean,
      default:true
    }
  },
  methods: {

  },
  mounted(){
    this.scroll = new bscroll(this.$refs.wrapper,{      //这里使用$ref对元素进行查找，防止选择器冲突
      probeType:this.probetype,
      pullUpLoad:this.pullupload,
      click:this.click,
      observeDOM:true        //2.0以上版本需要加上，动态刷新DOM
    })
    this.scroll.on('scroll',(position)=>{
      this.$emit('getPosition',position)
      
    }) 
    this.scroll.on('pullingUp',()=>{     //pullingUp事件表示滚动条达到元素的最大高度后处理事件
      this.$emit('pullingUp')
      
      this.scroll.finishPullUp()     //设置finishPullUp，可以反复刷新
    })
    
  }
}
</script>

<style>
  

  
</style>
