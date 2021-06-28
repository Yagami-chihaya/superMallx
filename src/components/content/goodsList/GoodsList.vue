<template>
  <div class='goods'>
    
    <goods-list-item v-for="item in goods" :key="item" :goods-item='item'></goods-list-item>
    
  </div>
</template>

<script>
import goodsListItem from '../goodsList/GoodsListItem.vue'


export default {
  el: '',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      
    }
  },
  methods: {

  },
  components:{
    goodsListItem
  }
}
</script>

<style>
  .goods{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    
  }
  .goods>div{
    flex: 1;
  }
</style>
