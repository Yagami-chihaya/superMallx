<template>
  <div class="recommend">
    <div v-for="item in recommends.list" :key="item.title">
      <a :href="item.link">
        <img :src="item.image">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  el: '',
  props:{
    recommends:Array
  },
  data () {
    return {
      
    }
  },
  methods: {

  },
}
</script>

<style>
  .recommend{
    display: flex;
  }
  .recommend>div{
    flex: 1;
    text-align: center;
  }
  .recommend img{
    width:80%;
    margin:0 auto
    
    
  }
</style>
