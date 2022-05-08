import {reqAddressInfo,reqOrderInfo} from '@/api'

const state={
  address: [],
  orderInfo:{}
}

const mutations={
  GETUSERADDRESS(state,res){
    state.address=res
  },
  GETORDERINFO(state,res){
    state.orderInfo=res
  }
}
const actions={
  async getUserAddress({commit}){
    let res=await reqAddressInfo()
    if(res.code==200){
      commit('GETUSERADDRESS',res.data)
    }
  },
  async getOrderInfo({commit}){
    let res=await reqOrderInfo()
    if(res.code==200){
      commit('GETORDERINFO',res.data)
    }
  }
}

const getters={
  address(state){
    return state.address || []
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}