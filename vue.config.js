module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/catalyx/dist/'
    : '/',
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'axios': 'axios',
      'element-ui': 'ELEMENT'
    }
  },
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/proxy': {
        target: 'http://0.0.0.0:7002', // 对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/proxy': ''
        }
      }
    }
  }
}