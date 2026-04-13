import { useAuthStore } from '@/stores/auth'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: apiUrl,
})

api.interceptors.request.use((config) => {
  const auth = useAuthStore()

  if (auth.token) {
    config.headers.Authorization = `Bearer ${auth.token}`
  }

  return config
})

api.interceptors.response.use(
  res => res,
  async err => {
    const auth = useAuthStore()

    if (err.response?.status === 401) {
      await auth.fetchToken()
      err.config.headers.Authorization = `Bearer ${auth.token}`
      return axios(err.config)
    }

    return Promise.reject(err)
  }
)

export default api
