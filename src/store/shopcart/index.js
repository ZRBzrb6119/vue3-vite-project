import { reqCartList,reqDeleteCartById,reqUpdateCheckedByid } from "@/api"

const state={
  cartList: []
}

const mutations={
  GETCARTLIST(state,res){
    state.cartList=res
  }
}

const actions={
  async getCartList({commit}){
    let res=await reqCartList()
    if(res.code==200){
      commit('GETCARTLIST',res.data)
    }
  },
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId)
    if (result.code == 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("faile"))
    }
  },
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedByid(skuId, isChecked)
    if (result.code == 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("faile"))
    }
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise =
        item.isChecked == 1 ? dispatch("deleteCartListBySkuId", item.skuId) : ""
      PromiseAll.push(promise)
    })
    return Promise.all(PromiseAll)
  },
  updateAllCartIsChecked({ dispatch, getters }, isChecked) {
    let promiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise = dispatch("updateCheckedById", {
        skuId: item.skuId,
        isChecked,
      })
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  },
}

const getters={
  cartList(state) {
    return state.cartList[0] || {}
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}