const { defineConfig } = require('@vue/cli-service')
const appData = require('./data.json')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: path.resolve(__dirname, './src/components'),
        common: path.resolve(__dirname, './src/common'),
      },
    },
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }

      devServer.app.get('/api/seller', (req, res) => {
        res.json({
          errno: 0,
          data: appData.seller,
        })
      })
      devServer.app.get('/api/goods', (req, res) => {
        res.json({
          errno: 0,
          data: appData.goods,
        })
      })
      devServer.app.get('/api/ratings', (req, res) => {
        res.json({
          errno: 0,
          data: appData.ratings,
        })
      })
      return middlewares
    },
  },
})
