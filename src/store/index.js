import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList:[]
  },
  mutations: {
    addCount(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      state.cartList.push(payload)
      payload.checked = true
    }
  },
  actions: {
    addCart2(context,payload){
      return new Promise((resolve,reject)=>{
        let oldProduct = null
        for(let item of context.state.cartList){
          if(item.iid === payload.iid){
            oldProduct = item
          }
        }
        if(oldProduct){
          context.commit("addCount",oldProduct)
          resolve('当前商品数量+1')
        }
        else {
          payload.count = 1
          context.commit('addToCart',payload)
          resolve('购物车商品数量+1')
        }
      })
    }
  },
  modules: {
  }
})
