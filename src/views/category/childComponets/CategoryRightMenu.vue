<template>
  <div @click="getGoodsInfo">
    <goods-list :goods="goods['new'].list" class="goodsListDiv"></goods-list>
    
  </div>
</template>

<script>
import goodsList from '../../../components/content/goodsList/GoodsList.vue'
import GoodsInfo from '../../../network/home'


export default {
  el: '',
  data () {
    return {
      goods:{
        
        'new':{page:0,list:[]},
        
      },
    }
  },
  components:{
    goodsList
  },
  methods: {
    getGoodsInfo(){
      console.log('123');
      
      GoodsInfo.createGoodsRequest('new',1).then(val=>{
        this.goods['new'].list.push(...val.data.data.list)
        console.log(val.data.data.list);
      })
    }
  },
  created(){
    this.getGoodsInfo()
  }
}
</script>

<style scoped>
  .goodsListDiv{
    margin-left: 40px;
    margin-top: 20px;
    
  }
</style>
