<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
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

<style>
  #tab-bar{
    display: flex;
    bottom: 0;
    position: fixed;
    right: 0;
    left: 0;
    background: rgb(211, 211, 211);
  }
</style>
