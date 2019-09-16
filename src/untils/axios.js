import axios from 'axios'
import { Taost } from 'vant'

const request = axios.create({
  baseURL: 'http://localhost:3000'
})

request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    Taost('网络异常')

    return Promise.reject(error)
  }
)

export default request
