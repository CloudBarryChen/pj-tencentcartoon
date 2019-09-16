
// 设置代理服务器
var kw = 's'
module.exports = {
  devServer: {
    proxy: {
      '/smart': {
        target: 'https://m.ac.qq.com',
        changeOrigin: true,
        pathRewrite: {
          '^/smart': ''
          // pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
          // pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        }

      },
      '/ajax': {
        target: 'http://m.maoyan.com/ajax/movieOnInfoList?token=',
        changeOrigin: true
      }
    }
  }
}
