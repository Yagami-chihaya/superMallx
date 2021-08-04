<template>
  <div>
    <p class="type" v-for="(item,index) in data" :key="index" :class="{active:currentIndex==index}" @click="itemClick(index)">{{item.title}}</p>
  </div>
</template>

<script>
import {createCategroyInfo} from '../../../network/category'


export default {
  el: '',
  data () {
    return {
      data:{
        type:Array,
        default:[]
      },
      currentIndex:0
    }
  },
  methods: {
    getLeftMenuInfo(){
      
      createCategroyInfo().then(value=>{
        console.log(value);
        this.data = value.data.data.category.list
      })
    },
    itemClick(index){
      
     this.currentIndex = index
    }
  },
  created(){
    this.getLeftMenuInfo()
  }
}
</script>

<style scoped>
  .type{
    width: 70px;
    text-align: center;
    background: rgb(233, 233, 233);
    border-bottom: 1px solid rgb(190, 190, 190);
    padding: 8px 10px;
  }
  .active{
    background: white;
    color: rgb(255, 87, 115);
    border-left:10px solid rgb(255, 87, 115);
    border-bottom: none;
  }
</style>
