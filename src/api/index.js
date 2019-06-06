import axios from 'axios'
import router from '@/router'
import Vue from 'vue'
// const debug = process.env.NODE_ENV !== 'production'

export const post = (url, options, config) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(url, options, config || {}).then(res => {
      const data = res.data
      if (data.code === 401) {
        router.push({ name: 'login' })
      }
      resolve(data)
    }).catch(err => {
      Vue.prototype.$notify('提示文案')
      reject(err)
    })
  })

  return promise
}

export const get = async (url, params, auth = true) => {
  // if (params)
  const options = {
    params: params
  }
  // console.log(auth)
  if (auth) {
    options.headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token') }
  }
  // console.log(options)
  return new Promise((resolve, reject) => {
    axios.get(url, options).then(res => {
      if (auth && res.data.code === 401) {
        Vue.prototype.$notify(res.data.msg)
        router.push({ name: 'login' })
      } else {
        resolve(res.data)
      }
    }).catch(_ => {
      this.$notify('提示文案')
      reject(_)
    })
  })
}

// 登录
export const login = async params => post('/proxy/user/access/login', params)
