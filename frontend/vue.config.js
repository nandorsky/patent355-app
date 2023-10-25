const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  outputDir: '../frontend/dist',
  indexPath: '../templates/index.html',
  publicPath: '/',
}

