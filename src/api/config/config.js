// /*修改新闻*/
// export const updateNews=formdata=>{
//   return axios.post(config.updateNews,formdata);
// }
//
// /*删除新闻*/
// export const deleteNews=params=>{
//   return axios.get(config.deleteNews,{params:params});
// }

// export const login=data=>{
//   return axios.post(config.login,createPostParams(data))
// }
// function createPostParams(obj) {
//   return qs.stringify(obj);
// }

import api from '../api/api'
import axios from 'axios'
// axios.defaults.withCredentials = true
var qs = require('qs')
// 登录
export const login = data => {
  return axios.post(api.login, createPostParams(data))
}
// 注册
export const register = params => {
  return axios.get(api.register, {params: params})
}
// 发送验证码
export const sendMsg = params => {
  return axios.get(api.SendMsg, {params: params})
}
// 验证码
export const MsgVerify = params => {
  return axios.get(api.MsgVerify, {params: params})
}
function createPostParams (obj) {
  return qs.stringify(obj)
}
