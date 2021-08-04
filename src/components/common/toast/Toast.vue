<template>
  <div class="toast">
    <p class="message">{{message}}</p>
  </div>
</template>

<script>
export default {
  el: '',
  props:{
    message:{
      type:String,
      dafault:''
    }
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
  .toast{
    display: none;
  }
  .message{
    
    position: fixed;
    background: rgba(0, 0, 0, 0.74);
    color: white;
    padding: 8px 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
  }
  .active{
    display: block;
  }
</style>
