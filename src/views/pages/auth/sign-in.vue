<template>

  <div class="account-page">

    <!-- loader here -->
    <Loader />

    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="account-content">
        <div class="login-wrapper bg-img">
          <div class="login-content">
            <form method="post" @submit.prevent="submitForm">
              <div class="login-userset">
                <div class="login-logo logo-normal">
                  <img src="/assets/img/logo.png" alt="img">
                </div>
                <a href="index.html" class="login-logo logo-white">
                  <img src="/assets/img/logo-white.png" alt="">
                </a>
                <div class="login-userheading">
                  <h3>Sign In</h3>
                  <h4>Access the Dreamspos panel using your username and passcode.</h4>
                  <div v-if="messageFailed" class="alert alert-danger">{{ messageFailed }}</div>
                  <div v-if="messageSuccess" class="alert alert-success">{{ messageSuccess }}</div>
                </div>
                <div class="form-login mb-3">
                  <label class="form-label">Username</label>
                  <div class="form-addons">
                    <input type="text" class="form- control" name="username" placeholder="Contoh: johndoe" v-model="authData.username">
                    <img src="/assets/img/icons/mail.svg" alt="img">
                  </div>
                </div>
                <div class="form-login mb-3">
                  <label class="form-label">Password</label>
                  <div class="pass-group">
                    <input type="password" class="pass-input form-control" name="password" placeholder="*******" v-model="authData.password">
                    <span class="fas toggle-password fa-eye-slash"></span>
                  </div>
                </div>
                <div class="form-login authentication-check">
                  <div class="row">
                    <div class="col-12 d-flex align-items-center justify-content-between">
                      <div class="custom-control custom-checkbox">
                        <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                          <input type="checkbox" class="form-control">
                          <span class="checkmarks"></span>Remember me
                        </label>
                      </div>
                      <div class="text-end">
                        <a class="forgot-link" href="forgot-password.html">Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-login">
                  <button type="submit" class="btn btn-login">Sign In</button>
                </div>
                <div class="signinform">
                  <h4>New on our platform?<a href="register.html" class="hover-a"> Create an account</a></h4>
                </div>
                <div class="form-setlogin or-text">
                  <h4>OR</h4>
                </div>
                <div class="form-sociallink">
                  <ul class="d-flex">
                    <li>
                      <a href="javascript:void(0);" class="facebook-logo">
                        <img src="/assets/img/icons/facebook-logo.svg" alt="Facebook">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <img src="/assets/img/icons/google.png" alt="Google">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="apple-logo">
                        <img src="/assets/img/icons/apple-logo.svg" alt="Apple">
                      </a>
                    </li>

                  </ul>
                  <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
                    <p>Copyright &copy; 2023 DreamsPOS. All rights reserved</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="login-img">
            <img src="/assets/img/authentication/login02.png" alt="img" style="object-fit: cover;">
          </div>
        </div>
      </div>
    </div>
    <!-- /Main Wrapper -->
    <div class="customizer-links" id="setdata">
      <ul class="sticky-sidebar">
        <li class="sidebar-icons">
          <a href="#" class="navigation-add" data-bs-toggle="tooltip" data-bs-placement="left"
            data-bs-original-title="Theme">
            <i data-feather="settings" class="feather-five"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import Loader from '@/components/Loader.vue';

const authStore = useAuthStore()
const router = useRouter()
const messageFailed = ref('');
const messageSuccess = ref('');
const authData = ref({
  username: '',
  password: ''
})

const submitForm = async (event) => {
  await authStore.doLogin(authData.value.username, authData.value.password)
  if(authStore.isAuthenticated)
  {
    router.push('/page/dashboard')
    return
  }
  messageFailed.value = 'Login failed. Please check your credentials and try again.';
}
</script>

<style></style>
