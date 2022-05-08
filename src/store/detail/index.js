import {reqGoodsInfo } from '@/api'
import {getuuid} from '@/utils/uuid_token'

const state={
  goodInfo:{},
  uuid_token:getuuid()
}

const mutations={
  GETGOODINFO(state,res){
    state.goodInfo=res
  }
}

const actions={
  async getGoodInfo({commit},skuid){
    let result=await reqGoodsInfo(skuid)
    if(result.code==200){
      commit('GETGOODINFO',result.data)
    }
  }
  
}

const getters={
  categoryView(state) {
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || []
  },
}

export default{
  state,
  mutations,
  actions,
  getters
}