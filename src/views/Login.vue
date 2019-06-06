<template>
  <div id="login">
    <img class="logo" alt="logo" src="@/assets/images/logo.jpg">
    <div class="system-name">CATALYX ACTIVITY DESIGN SYSTEM</div>
    <div>
      <hr class="hrLine" style="width:45%;"/>
      <i class="el-icon-user-solid"></i>
      <hr class="hrLine" style="width:45%;"/>
    </div>
    <div class="login-form">
      <el-input v-model="email" placeholder="Email"></el-input>
      <el-input v-model="password" placeholder="Password"></el-input>
      <div>
        <el-button type="primary" style="width: 200px; margin: 20px;" @click="submitForm">Login</el-button>
      </div>
      <div class="display-flex padding-20">
        <span class="color-white">Forget password?</span>
        <span class="color-white">Sign up</span>
      </div>
    </div>
  </div>
</template>

<script>
// import * as types from '@/store/mutationType'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    submitForm () {
      this.$router.push({ path: this.$route.query.redirect })
    }
  }
}

</script>
<style scoped>
#login {
  background-color: #49467E;
  height: 100vh;
  width: 100%;
  display: inline-block;
}
.logo {
  width: 350px;
  height: 140px;
  margin-top: 15vh;
}
.system-name {
  color: #fff;
  font-size: 30px;
  line-height: 60px;
}

.hrLine{
  vertical-align:middle;
  display:inline-block;
}
.login-form {
  margin-top: 40px;
  max-width: 440px;
  padding: 20px;
  display: inline-block;
}
.el-input {
  max-width: 400px;
  margin: 10px 0;
}
</style>
