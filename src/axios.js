import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'
import QS from 'qs';


axios.defaults.baseURL = "http://localhost:88/api/"
axios.defaults.headers = {'Content-Type': 'application/json',"Authorization": localStorage.getItem("token")}

// axios.interceptors.response.use(response => {
//     let res = response.data;
//
//     console.log("=================")
//     console.log(res)
//     console.log("=================")
//
//     if (res.code === 200) {
//       return response
//     } else {
//
//       Element.Message.error('错了哦，这是一条错误消息', {duration: 3 * 1000})
//
//       return Promise.reject(response.data.msg)
//     }
//   },
//   error => {
//     console.log(error)
//     if(error.response.data) {
//       error.message = error.response.data.msg
//     }
//
//     if(error.response.status === 401) {
//       store.commit("REMOVE_INFO")
//       router.push("/logandres/login")
//     }
//
//     Element.Message.error(error.message, {duration: 3 * 1000})
//     return Promise.reject(error)
//   }
// )

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      }).catch((error) => {
      console.log(error)
      if (error.response.data) {
        error.message = error.response.data.msg
        Element.Message.error({
          message: "系统错误",
          offset: 50
        })
        router.push('/')
      }
      if (error.response.status === 401) {
        store.commit("REMOVE_INFO")
        router.push("/logandres/login")
      }
    })

  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, JSON.stringify(params))
      .then(res => {
        resolve(res.data);
      }).catch((error) => {
      console.log(error)
      if (error.response.data) {
        error.message = error.response.data.msg
        Element.Message.error({
          message: "系统错误",
          offset: 50
        })
        router.push('/')
      }
      if (error.response.status === 401) {
        store.commit("REMOVE_INFO")
        router.push("/logandres/login")
      }
    })

  });
}
