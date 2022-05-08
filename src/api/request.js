import axios from 'axios'
import store from '@/store'

const instance=axios.create({
  baseURL:'/api',
  timeout:5000
})

instance.interceptors.request.use(config =>{
  if(store.state.detail.uuid_token){
    config.headers.userTempId = store.state.detail.uuid_token
  }
  if(store.state.user.token){
    config.headers.token = store.state.user.token
  }
  return config
})

instance.interceptors.response.use((res) =>{
  return res.data
}, error =>{
  console.log(error)
})

export default instance