import instance from './request.js'
import mockInstance from './mockRequest.js'

export const getBaseCategoryList=() => instance.get('/product/getBaseCategoryList')

export const reqGetBannerList = () => mockInstance.get("/banner")

export const reqFloorList=()=>mockInstance.get('/floor')

export const reqGetSearchInfo = (params)=>instance({url:"/list",method:"post",data:params})

export const reqGoodsInfo = (skuId)=>instance({url:`/item/${skuId}`,method:'get'})

export const reqShopCart = (skuId,skuNum)=>instance({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})

export const reqCartList = ()=>instance({url:'/cart/cartList ',method:'get'})

export const reqUpdateCheckedByid = (skuId,isChecked)=>instance({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

export const reqDeleteCartById = (skuId)=>instance({url:`/cart/deleteCart/${skuId}`,method:'delete'})

export const reqGetCode=(phone)=>instance({url:`/user/passport/sendCode/${phone}`,method:'get'})

export const reqUserRegister = (data)=>instance({url:'/user/passport/register',data,method:'post'})

export const reqUserLogin=(data)=>instance({url:'/user/passport/login',data,method:'post'})

export const reqUserInfo = ()=>instance({url:'/user/passport/auth/getUserInfo',method:'get'})

export const reqLogout=()=>instance({url:'/user/passport/logout',method:'get'})

//获取用户地址信息
export const reqAddressInfo = ()=>instance({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

//获取商品清单
export const reqOrderInfo = ()=>instance({url:'/order/auth/trade',method:'get'})

export const reqSubmitOrder = (tradeNo,data)=>instance({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

export const reqPayInfo = (orderId)=>instance({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

export  const reqPayStatus = (orderId)=>instance({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

export const reqMyOrderList=(page,limit)=>instance({url:`/order/auth/${page}/${limit}`,method:'get'})