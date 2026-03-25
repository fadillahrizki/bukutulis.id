<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
  const getAuthToken = async () => {

    const token = localStorage.getItem('token')

    if (token) {

      const tokenExpiredAt = localStorage.getItem('token_expired_at')

      if (tokenExpiredAt && new Date() > new Date(tokenExpiredAt)) {
        localStorage.removeItem('token')
        localStorage.removeItem('token_expired_at')

        location.reload()
      }

      return;
    }

    try {
      const response = await axios.get('https://www.veonpos.com/kowloon/oauth/token', {
        auth: {
          username: 'cranberry',
          password: '112233'
        }
      })
      localStorage.setItem('token', response.data.data.token)
      localStorage.setItem('token_expired_at', response.data.data.expired_at)
    } catch (error) {
      console.error('Error fetching auth token:', error);
    }
  };

  getAuthToken();
});
</script>

<template>
  <div id="app">
    <div class="main-wrapper">
      <RouterView />
    </div>
  </div>
</template>
