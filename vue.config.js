// vue.config.js 配置说明
// 官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions

module.exports = {
  // 基本路径
  //baseUrl: './',  //设置这个子路由会报错。未解决
  // 多页面
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '禅城政企大数据-门户',
    },
    leader: {
      entry: 'src/pages/leader/main.js',
      template: 'public/leader.html',
      filename: 'leader.html',
      title: '禅城政企大数据-领导'
    }
  },
  // sass/scss
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/sass/mixin.scss";`
      }
    }
  },
}