<template>
  <div id="login">
    <img class="logo" alt="logo" src="../assets/images/logo.jpg">
    <el-input v-model="email" placeholder="Email"></el-input>
    <el-input v-model="password" placeholder="Password"></el-input>
  </div>
</template>

<script>
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

  methods: {}
}

</script>
<style scoped>
#login {
  background-color: #49467E;
  height: 100vh;
}
.logo {
  width: 300px;
  height: 120px;
  margin-top: 10vh;
}

.el-input {
  max-width: 400px;
}
</style>
