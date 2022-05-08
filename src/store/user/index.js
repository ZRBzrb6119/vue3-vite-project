import {reqGetCode,reqUserLogin,reqUserInfo,reqLogout} from '@/api'
import { setToken, getToken,removeToken} from "@/utils/token"

const state={
  phone:'',
  code:'',
  token:getToken(),
  userInfo:{}
}

const mutations={
  GETCODE(state,data){
    state.code=data.code
    state.phone=data.phone
  },
  USERLOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  CLEAR(state){
    state.userInfo={}
    state.token=''
    removeToken()
  }
}

const actions={
  async getCode({commit},phone){
    let res=await reqGetCode(phone)
    if(res.code===200){
      commit('GETCODE',{code:res.data,phone})
      return 'success'
    }
    else{
      return Promise.reject(new Error('faile'))
    }
  },
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data)
    if (result.code == 200) {
      commit("USERLOGIN", result.data.token)
      setToken(result.data.token)
      return "success"
    } else {
      return 'false'
    }
  },
  async getUserInfo({ commit }) {
    let result = await reqUserInfo()
    if (result.code == 200) {
      commit("GETUSERINFO", result.data)
      return 'success'
    }else{
      return 'false'
    }
  },
  async userLogout({commit}) {
    let result = await reqLogout()
    if(result.code==200){
      commit("CLEAR")
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'))
    }
  }
}

const getters={

}

export default {
  state,
  mutations,
  actions,
  getters,
}