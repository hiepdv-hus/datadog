<template>
  <div class="login">
    <div class="auth-wrap">
      <div class="notifications">
        <div class="auth-card">
          <div class="auth-row pd-t-59">
            <img data-v-6696f722="" src="https://dc7zw0k63rq6r.cloudfront.net/img/ASB_logo_PNG_Horizontal.cd416b0b.png" alt="logo">
          </div>
          <form @submit.prevent="handleSubmit" method="post" class="formLogin">
            <!--      <div class="form-group">-->
            <!--        <label>Email</label>-->
            <!--        <input v-model="user_id" class="input is-primary" type="email" placeholder="Email">-->
            <!--      </div>-->
            <!--      <div class="form-group">-->
            <!--        <label>Password</label>-->
            <!--        <input v-model="password" class="input is-primary" type="password" placeholder="Password">-->
            <!--      </div>-->
            <div class="auth-row">
              <div class="auth-col auth-right">
                <span id="txt-username">Username/Email</span>
              </div>
              <div class="auth-col auth-left">
                <input v-model="user_id" id="inp-username" type="text" name="username" class="w-86-per">
              </div>
            </div>
            <div class="auth-row">
              <div class="auth-col auth-right">
                <span id="txt-password">Password</span>
              </div>
              <div class="auth-col auth-left">
                <input v-model="password" id="inp-password" type="password" name="password" class="w-86-per">
              </div>
            </div>
            <div class="auth-login">
              <div class="auth-action">
                <button class="btn btn-submit" type="submit">Login</button>
              </div>
            </div>

            <div class="lds-dual-ring" v-show="loading"></div>
          </form>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      user_id: 'admin@email.com',
      password: '12345',
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      this.loading = true
      let reponse = await axios.post("https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v2/auth/login", {
        user_id : this.user_id,
        password : this.password
      })
      localStorage.setItem("token", reponse?.data?.accessIotToken)
      this.$router.push("/home");
    }
  }
}
</script>
<style>
.form-group label{
  padding-right: 1rem;
}
form.formLogin {
  margin-top: 5rem;
  text-align: center;
}

.login {
  min-height: 100%;
  position: relative;
}
.auth-wrap {
  background-image: url("https://dc7zw0k63rq6r.cloudfront.net/img/water_png_transparent_1484498_opacity_0.5.5b7ccec6.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
}
.notifications {
  display: block;
  position: fixed;
  z-index: 5000;
  top: 30px;
  left: calc(50% - 400px);
}
.auth-wrap .auth-card {
  height: 496px;
  width: 786px;
  border-radius: 36px;
  background-color: #fff;
  -webkit-box-shadow: 5px 4px 4px 0 rgb(33 0 0 / 12%);
  box-shadow: 5px 4px 4px 0 rgb(33 0 0 / 12%);
  margin: auto;
  margin-top: 10%;
}
.auth-wrap .auth-card .auth-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 3rem 0;
  margin-left: 14%;
}
.auth-wrap .auth-card .auth-row .auth-right {
  width: 165px;
  text-align: left;
}
.auth-wrap .auth-card .auth-row .auth-col span {
  font-size: 20px;
  line-height: 29px;
  color: #061722;
}
.auth-wrap .auth-card .auth-row .auth-left {
  padding: 2px 5%;
  text-align: right;
}
input[type=password], input[type=text], select {
  width: 90%;
  border: 1px solid #e35f51;
  border-radius: 5px;
  padding-left: 6px;
  padding-right: 18px;
}

.w-86-per {
  width: 22rem !important;
}
.auth-wrap .auth-card .auth-row img {
  width: 332px;
  height: 38px;
  margin: auto;
}

.lds-dual-ring {
  position: absolute;
  top: 13rem;
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #e91e63  transparent #e91e63  transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>