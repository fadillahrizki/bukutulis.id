import { defineStore } from 'pinia'
import api from '@/services/api'

const EXPIRY_BUFFER = 5000

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    expiredAt: null,

    user: null,

    isReady: false,          // token siap
    isAuthenticated: false   // user login
  }),

  getters: {
    isTokenValid(state) {
      if (!state.token || !state.expiredAt) return false
      return Date.now() < (state.expiredAt - EXPIRY_BUFFER)
    }
  },

  actions: {
    async initAuth() {
      try {
        if (!this.isTokenValid) {
          await this.fetchToken()
        }

        // token sudah siap
        this.isReady = true

        // cek apakah user sudah login (persist)
        this.isAuthenticated = !!this.user

      } catch (e) {
        this.isReady = false
      }
    },

    async fetchToken() {
      try {
        const auth = {
          username: import.meta.env.VITE_AUTH_USERNAME,
          password: import.meta.env.VITE_AUTH_PASS,
        }

        const { data } = await api.post('/oauth/token', {}, { auth })

        this.token = data.data.token

        // pastikan ini durasi detik
        this.expiredAt = Date.now() + (data.data.expired_at * 1000)

      } catch (err) {
        console.error('Failed get token', err)
        this.token = null
        this.expiredAt = null
        throw err
      }
    },

    async doLogin(username, password) {
      try {
        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)

        const { data } = await api.post('/auth/login', formData)

        this.user = data.data
        this.isAuthenticated = true

        return true

      } catch (error) {
        this.isAuthenticated = false
        return false
      }
    },

    async logout() {
      try {
        await api.post('/auth/logout')
      } catch (e) {}

      this.user = null
      this.isAuthenticated = false
    }
  },

  persist: true
})