import request from "./request"

export default {
  createHomeRequest(){
    return request.createAxios({
      url:'/home/multidata'
    })
  }
}