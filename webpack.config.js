const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "./bundle.js"
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/(.*)#meow(\.*)/, function(
      resource
    ) {
      // do what ever mapping
      resource.request = resource.request.replace(/#meow/, `meow.js`);
    })
  ],
  resolve: {}
};
