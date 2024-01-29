import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: [
    // "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    //'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    "./public/js/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    hotUpdateChunkFilename: ".hot/hot-update.js",
    hotUpdateMainFilename: ".hot/hot-update.json",
  },
  watchOptions: {
    ignored: "/node_modules/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 8080,
    hot: true,
    proxy: {
      "/": "http://localhost:3000",
    },
  },
};
