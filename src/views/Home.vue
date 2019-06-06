<template>
  <el-container>
    <el-header class="display-flex align-items-center">
      <img class="logo" alt="logo" src="@/assets/images/logo.jpg">
      <div class="system-name">CATALYX ACTIVITY DESIGN SYSTEM</div>
      <img class="avatar" :src="avatarUrl">
    </el-header>
    <el-header class="mian-color-bg width-height-full">
      <div class="center">
        <div class="main-menus">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconcangkucangchu-xianxing"></use>
          </svg>
          <span>Home</span>
        </div>
      </div>
    </el-header>
    <el-container class="main-container">
      <router-view />
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      avatarUrl: 'https://profile.csdnimg.cn/2/E/9/1_qq_23142315',
      password: ''
    }
  }
}
</script>

<style scoped>
.logo {
  height: 60px;
  width: 150px;
}
.system-name {
  line-height: 60px;
}
.avatar {
  height: 50px;
  width: 50px;
  border-radius: 25px;
}
.main-menus {
  height: 60px;
  width: 60px;
  margin: 0 20px;
}
.main-container {
  margin: 0 auto;
  height: calc(100vh - 120px);
}

.main-container-left {
  width: 25%;
}

@media (min-width: 768px) {
  .main-container{
    width: 750px !important;
  }
}
@media (min-width: 992px) {
  .main-container {
    width: 970px !important;
  }
}
@media (min-width: 1200px) {
  .main-container {
    width: 1140px !important;
  }
}
</style>
