import axios from 'axios'

const token = localStorage.getItem('token')

const api = axios.create({
  baseURL: 'https://www.veonpos.com/kowloon/auth/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
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
