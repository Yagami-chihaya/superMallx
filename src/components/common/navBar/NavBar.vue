<template>
  <div id='nav-bar'>
    <div class="left"><slot name='left'></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      
    }
  },
  methods: {

  },
}
</script>

<style>
  #nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .left{
    
    width: 60px;
  }
  .center{
    flex: 1;
    
  }
  .right{
    width: 60px;
  }
</style>
