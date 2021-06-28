<template>
  <div id='tab-control'>
    <div v-for="(item,index) in titles" :key="item" @click="itemClick(index,item)">
      <span :class="{active:index===currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  el: '',
  props:{
    titles:Array
  },
  data () {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit("tabClick",index)
    }
  },
}
</script>

<style>
  #tab-control{
    display: flex;
    text-align: center;
    background: rgb(238, 238, 238);
    z-index: 2;
   
  }
  #tab-control>div{
    flex: 1;
    padding-top: 5px;
    height: 40px;
    line-height: 40px;
  }
  .active{
    color: violet;
    border-bottom: 2px solid violet ;
    
  }
</style>
