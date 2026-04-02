import axios from 'axios'

const token = localStorage.getItem('bukutulis_app_token')
const apiUrl = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    if (error.response.status == 403 || error.response.status == 401) {
      // localStorage.clear()
      // location.reload()
    }
    return Promise.reject(error)
  },
)

export default api
