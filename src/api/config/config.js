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
import axios from 'axios'
import api from '../api/api'
// axios.defaults.withCredentials = true

// 二手房列表
export const usedLists = params => {
  return axios.get(api.used_lists, {params: params})
}
// 二手房详情页
export const usedDetail = params => {
  return axios.get(api.used_detail, {params: params})
}
// 新房列表
export const NewList = params => {
  return axios.get(api.NewList, {params: params})
}
// 新房详情
export const NewDetail = params => {
  return axios.get(api.New_Detail, {params: params})
}
// 租房列表
export const RetalLists = params => {
  return axios.get(api.RetalLists, {params: params})
}
// 租房详情
export const RtalDetail = params => {
  return axios.get(api.RtalDetail, {params: params})
}
// 地图找房
export const MapMapHouse = params => {
  return axios.get(api.MapMapHouse, {params: params})
}
// 地图找房第二级别
export const mapHouseVillage = params => {
  return axios.get(api.mapHouseVillage, {params: params})
}
// 查门店
export const StoreLists = params => {
  return axios.get(api.StoreLists, {params: params})
}
// 门店详情
export const StoreDetail = params => {
  return axios.get(api.StoreDetail, {params: params})
}

// 百科搜索详情页
export const EncyDetail = params => {
  return axios.get(api.EncyDetail, {params: params})
}

// 数据_区域
export const area = ['不限', '金桥开发区', '如意开发区', '玉泉区', '回民区', '赛罕区', '新城区']
// 数据_价格
export const price = ['不限', '30万以下', '30万-40万', '40万-50万', '50万-60万', '60万-80万', '80万-100万', '100万-120万', '120万以上']
// 数据_房型
export const houseType = ['不限', '一室', '二室', '三室', '四室', '五室']
// 数据_朝向
export const direction = ['东', '西', '南', '北', '南北']
// 数据_建筑面积
export const builtArea = ['50以下', '50-70', '70-90', '90-110', '110-130', '130-150', '150-200', '200以上']
// 数据_标签
export const label = ['精品房源', '满五唯一']
// 数据_房龄
export const age = ['10年以内', '15年以内', '20年以内', '20年以上', '5年以内']
// 数据_楼层
export const floor = ['底层', '低楼层', '中楼层', '高楼层', '顶层']
// 数据_装修情况
export const decoration = ['毛肧', '简单装修', '精装修', '豪华装修']
// 数据_是否有电梯
export const dianti = ['有电梯', '无电梯']
// 数据_类型
export const type = ['平层', '复式', '跃层']

// 搜索
export const VillageFind = params => {
  return axios.get(api.VillageFind, {params: params})
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
