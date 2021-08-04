<template>
  <div>
    <div class="rules">
      <div class="rule" v-for="(item,index) in rule" :key="index">
        <span v-for="item1 in item" :key="item1">{{item1}}</span>     
      </div>
    </div>
    <div class="infos">
      <div class="info" v-for="item in info" :key="item">
        <span class="info_key">{{item.key}}</span>
        <span class='info_value'>{{item.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: '',
  props:{
    rule:{},
    info:{}
  },
  data () {
    return {
      
    }
  },
  methods: {

  },
}
</script>

<style scoped>
  .rule{
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  .rule span{
    
    height: 40px;
    line-height: 40px;
    border-bottom: 3px solid rgb(214, 214, 214);
    
  }
  .rule span:nth-child(1){
    width: 30%;
    
  }
  .rule span:not(:nth-child(1)){
    flex: 1;
    color: rgb(0, 0, 0);
    text-align: right;
  }
  .info{
    display: flex;
    width: 90%;
    margin: 0 auto;
    
  }
  .info span{
    height: 40px;
    line-height: 40px;
    border-bottom: 3px solid rgb(214, 214, 214);
    display: block;
    
  }
  .info_key{
    width: 30%;
  }
  .info_value{
    flex: 1;
    color: rgb(252, 57, 96);
    text-align: left;
  }
</style>
