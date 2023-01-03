import axios from 'axios'
import { showToast } from 'vant';

const service = axios.create({
 baseURL: 'http://127.0.0.1:4523/',
 timeout: 8000, // 超时时间
})

service.interceptors.request.use(config=>{
 return config
},err=>{
  Promise.reject(err)
})

service.interceptors.response.use(res=>{
 const {code, data, msg} = res.data
 if(code === 200){
  return data
 } else {
  showToast(msg)
 }
})

export default service