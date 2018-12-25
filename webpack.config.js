const webpack = require("webpack");
const NormalModuleReplacementPlugin = require("./NormalModuleReplacementPlugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "./bundle.js"
  },
  plugins: [
    new NormalModuleReplacementPlugin(/(.*)#meow(\.*)/, function(resource) {
      // do what ever mapping
      resource.request = resource.request.replace(/#meow/, `meow.js`);
    })
  ],
  resolve: {}
};
