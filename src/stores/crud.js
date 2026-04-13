import { defineStore } from 'pinia'
import api from '@/services/api.js'

export const useCrudStore = defineStore('crud', {
  state: () => ({
    items: [],
    item: null,
    loading: false,
    error: null,
    openCreateModal: false,
    openEditModal: false
  }),

  actions: {
    // GET LIST
    async fetchAll(endpoint, params = {}) {
      this.loading = true
      this.error = null

      try {
        const res = await api.get(endpoint, { params })
        this.items = res.data.data ?? res.data
      } catch (err) {
        this.error = err.response?.data || err.message
      } finally {
        this.loading = false
      }
    },

    // GET DETAIL
    async fetchOne(endpoint) {
      this.loading = true
      this.error = null

      try {
        const res = await api.get(`${endpoint}`)
        this.item = res.data.data ?? res.data
      } catch (err) {
        this.error = err.response?.data || err.message
      } finally {
        this.loading = false
      }
    },

    // CREATE
    async create(endpoint, payload) {
      this.loading = true
      this.error = null

      try {
        const res = await api.post(endpoint, payload)
        // this.items.push(res.data.data ?? res.data)
        return res.data
      } catch (err) {
        this.error = err.response?.data || err.message
        throw err
      } finally {
        this.loading = false
      }
    },

    // UPDATE
    async update(endpoint, id, payload) {
      this.loading = true
      this.error = null

      try {
        const res = await api.put(`${endpoint}/${id}`, payload)

        // const index = this.items.findIndex(i => i.id === id)
        // if (index !== -1) {
        //   this.items[index] = res.data.data ?? res.data
        // }

        return res.data
      } catch (err) {
        this.error = err.response?.data || err.message
        throw err
      } finally {
        this.loading = false
      }
    },

    // DELETE
    async remove(endpoint, param) {
      this.loading = true
      this.error = null

      try {
        await api.post(`${endpoint}`, param)
        // this.items = this.items.filter(i => i.id !== id)
      } catch (err) {
        this.error = err.response?.data || err.message
        throw err
      } finally {
        this.loading = false
      }
    },

    // RESET STATE
    reset() {
      this.items = []
      this.item = null
      this.error = null
    }
  }
})