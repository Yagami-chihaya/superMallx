
import request from './request'


export function createDetailInfo(iid){
  return request.createAxiosGoods({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommends(){
  return request.createAxiosGoods({
    url:'/recommend'
  })
}

export class Goods{
  constructor (itemInfo,columns,shopInfo,detailInfo){
    this.title = itemInfo.title
    this.nowPrice = itemInfo.price,
    this.lowPrice = itemInfo.lowPrice,
    this.highPrice = itemInfo.highPrice,
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.desc = itemInfo.desc

    this.columns = columns

    
    this.storeName = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.allSells = shopInfo.cSells
    this.allGoods = shopInfo.cGoods
    this.score = shopInfo.score

    this.detailInfo = detailInfo
    
  }
}

export class GoodsParams{
  constructor(itemParams){
    this.rule = itemParams.rule.tables[0]
    this.info = itemParams.info.set
  }
}

export class GoodsComments{
  constructor (rate){
    this.comment = rate.list[0].content
    this.avatar = rate.list[0].user.avatar
    this.uname = rate.list[0].user.uname
    this.goodStyle = rate.list[0].style
    this.userImg = rate.list[0].images
    this.date = rate.list[0].created
  }
}