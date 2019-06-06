/**
 * 公共状态
 */
import * as types from '../mutationType'
import * as API from '@/api/'
const state = {
  token: sessionStorage.getItem('token') || '', // 登录token
  userinfo: {} // 用户信息
}
const getters = {
  getToken: state => state.token,
  getUserinfo: state => state.userinfo
}
const actions = {
  // 登录
  async userLogin ({ state, commit }, params) {
    const res = await API.login(params)

    const promise = new Promise((resolve, reject) => {
      if (Number(res.code) === 0 && res.data) {
        commit(types.SET_TOKEN, res.data.token)
        commit(types.SET_USERINFO, res.data.userInfo)
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('userinfo', JSON.stringify(res.data.userInfo))
      }
      resolve(res)
    })

    return promise
  }
}
const mutations = {
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_USERINFO] (state, userinfo) {
    state.userinfo = userinfo
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
