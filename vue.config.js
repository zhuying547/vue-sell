const appData = require("./data.json");
const { seller, goods, ratings } = appData;
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    onBeforeSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      devServer.app.get("/api/seller", function (req, res) {
        res.json({ errno: 0, data: seller });
      });
      devServer.app.get("/api/goods", function (req, res) {
        res.json({ errno: 0, data: goods });
      });
      devServer.app.get("/api/ratings", function (req, res) {
        res.json({ errno: 0, data: ratings });
      });
    },
  },
});
