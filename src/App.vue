<template>
  <div id="app">
    <router-view></router-view>
    <tabBar>

      <tabBarItem path='/home'>
        <template v-slot:item-img>
          <img src="./assets/img/tabbar/首页-选中.png">
        </template>
        <template v-slot:item-img-active>
          <img src="./assets/img/tabbar/首页-选中(1).png">
        </template>
        <template v-slot:item-text>
          <p>首页</p>
        </template>
      </tabBarItem>

      <tabBarItem path='/category'>
        <template v-slot:item-img>
          <img src="./assets/img/tabbar/分类.png">
        </template>
        <template v-slot:item-img-active>
          <img src="./assets/img/tabbar/分类(1).png">
        </template>
        <template v-slot:item-text>
          <p>分类</p>
        </template>
      </tabBarItem>

      <tabBarItem path='/cart'>
        <template v-slot:item-img>
          <img src="./assets/img/tabbar/购物车.png">
        </template>
        <template v-slot:item-img-active>
          <img src="./assets/img/tabbar/购物车(1).png">
        </template>
        <template v-slot:item-text>
          <p>购物车</p>
        </template>
      </tabBarItem>

      <tabBarItem path='/profile'>
        <template v-slot:item-img>
          <img src="./assets/img/tabbar/我的.png">
        </template>
        <template v-slot:item-img-active>
          <img src="./assets/img/tabbar/我的(1).png">
        </template>
        <template v-slot:item-text>
          <p>我的</p>
        </template>
      </tabBarItem>

    </tabBar>
  </div>
  
</template>
<script>
import tabBar from './components/common/tabbar/TabBar.vue'
import tabBarItem from './components/content/TabBarItem.vue'


export default {
  el:'#app',
  components:{
    tabBar,
    tabBarItem,
    
  }
}
</script>
<style>
@import url('assets/css/base.css');
</style>
