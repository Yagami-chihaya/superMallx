import request from './request'

export function createCategroyInfo(){
  return request.createAxiosGoods({
    url:'/category',
  })
}