module.exports = {
  transpileDependencies: true,
  publicPath: 'http://localhost:8080',
  outputDir: '../frontend/dist',
  indexPath: '../../patent355/templates/index.html',
  publicPath: '/',
}

configureWebpack: {
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  }
}