const path = require("path");
var envFile = require('node-env-file');


process.env.NODE_ENV = process.env.NODE_ENV || 'develop';

  try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
  } catch (e) {

  }


console.log(process.env.TO_EMAIL_ADDRESS);


module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
  }
  }
};
