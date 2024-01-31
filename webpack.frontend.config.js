const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
  entry: "./public/js/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.frontend.js",
    publicPath: "/",
  },
  devtool: "inline-source-map", // For source mapping
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8080,
    proxy: {
      "/": "http://localhost:3000",
    },
    
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
