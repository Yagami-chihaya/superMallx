<template>
  <div class="comment">
    <div class="comment_up">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    
    <div class="comment_down">
      <div class="user_info">
        <img :src="'http:'+goodsComments.avatar"><span class="userName">{{goodsComments.uname}}</span>
      </div>
      
      <p class="ucomment">{{goodsComments.comment}}</p>


      <p class="style">时间:{{getDate(goodsComments.date)}} {{goodsComments.goodStyle}}</p>

      <div class="user_img">
        <img v-for="item in goodsComments.userImg" :key="item" :src="'https:'+item">
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  el: '',
  props:{
    goodsComments:Array
  },
  data () {
    return {
      
    }
  },
 
  methods: {
    getDate(time){
      const date1 = new Date(time*1000)
      return date1.toDateString()
    }
  },
}
</script>

<style scoped>
  .comment{
    margin-top: 20px;
    border-top: 4px solid rgb(204, 204, 204);
  }
  .comment_up{
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    width: 90%;
    border-bottom: 2px solid rgb(201, 201, 201);
    position: relative;
  }
  .comment_up>span:nth-child(1){
    position: absolute;
  }
  .comment_up>span:nth-child(2){
    position: absolute;
    right: 0;
  }
  .comment_down{
    margin: 0 auto;
    width: 90%;
  }
  .user_info{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user_info img{
   
    
    width: 40px;
    border-radius: 50%;
    vertical-align:middle;
  }
  .comment_down .userName{
    
    color: rgb(59, 59, 59);
    font-size: 16px;
    
    
  }
  .comment_down .ucomment{
    color: rgb(109, 109, 109);
    font-size: 12px;
    margin-bottom: 10px;
  }
  .comment_down .style{
    color: rgb(175, 175, 175);
    font-size: 8px;
    margin-bottom: 10px;
  }
  .user_img img{
    width:80px;
    margin-right: 5px;    
  }
</style>
