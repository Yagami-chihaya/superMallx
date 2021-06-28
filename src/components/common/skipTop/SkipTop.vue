<template>
  <div class="skiptop">
    <img src="../../../assets/img/back-top.png">
  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
        
    }
  },
  methods: {

  },
}
</script>

<style scoped>
  .skiptop{
    position: fixed;
    bottom: 55px;
    right: 10px;
  }
  .skiptop img{
    width: 43px;
    height: 43px;
    z-index: 3;
  }
</style>
