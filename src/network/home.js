import request from "./request"

export default {
  createHomeRequest(){
    return request.createAxios({
      url:'/home/multidata'
    })
  },
  createGoodsRequest(type,page){
    return request.createAxiosGoods({
      url:'/home/data',
      params:{
        type,
        page
      }
      
    })
  }
}