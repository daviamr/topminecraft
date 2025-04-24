import axios from 'axios'

const api = axios.create({
  baseURL: "https://api.mcsrvstat.us/3/",
  timeout: 5000,
})

export default api
