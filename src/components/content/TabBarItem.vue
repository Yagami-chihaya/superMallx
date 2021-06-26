<template>
  
  <div class='tab-bar-item' @click='clickItem'>
    <slot name='item-img' v-if="isActivated"></slot>
    <slot name='item-img-active' v-else></slot>
    <div :style="isActivated?{color:this.activeColor}:{}">
      <slot name='item-text'></slot>
    </div>
    
  
  </div>
</template>

<script>
export default {
  el: '',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'rgb(255, 13, 134)'
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    clickItem(){
      
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActivated(){
      return this.$route.path == this.path
    }
  }
}
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 28px;
    height: 28px;
  }
  .tab-bar-item p{
    font-size: 8px;
    
  }
  
</style>
