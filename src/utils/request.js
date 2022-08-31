import axios from 'axios'

const server = axios.create({
  baseURL: 'https://applet-base-api-t.itheima.net',
  timeout: 5000
})

server.interceptors.response.use(response => {
  const { message, data, status } = response.data
  if (!status) {
    return data
  } else {
    return new Promise(new Error(message))
  }
}, error => {
  return error
})

export default server
