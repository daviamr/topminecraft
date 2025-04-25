import axios from 'axios'

const api = axios.create({
  baseURL: "https://api.mcstatus.io/v2/",
  timeout: 5000,
})

export default api
