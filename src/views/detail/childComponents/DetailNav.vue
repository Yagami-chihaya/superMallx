<template>
  <div id='detailnav'>
    <navBar class="navBar">
      <template v-slot:left>
        <div>
          <img src="../../../assets/img/返回.png" @click="backClick">
        </div>
      </template>
      <template v-slot:center>
        <p v-for="(item,index) in title" :key="item" :class="{active:index==currentIndex}" @click='itemClick(index)'>{{item}}</p>
      </template>
    </navBar>
  </div>
</template>

<script>
import navBar from '../../../components/common/navBar/NavBar.vue'

export default {
  el: '',
  data () {
    return {
      title:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('getNavIndex',index)
    },
    backClick(){
      this.$router.back()
    }
  },
  components:{
    navBar
  }
}
</script>

<style>


  .navBar{
    

    
  }
  .center{
    display: flex;
  }
  .center p{
    flex:1
  }
  .active{
    background: lightcoral;
    color: white;
    
  }
  .left{
    
  }
  .left img{
    position: fixed;
    top: 10px;
    left:18px;
    width:24px;

  }
</style>
