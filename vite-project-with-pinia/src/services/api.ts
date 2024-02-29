// this file will be useful to configure our axios instance
import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT
})

export default instance