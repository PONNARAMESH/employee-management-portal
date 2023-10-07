const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotEnvModules = require("dotenv");

const appSettingsFile = true
  ? "/config/development.env"
  : "/settings/production.env";
const envFilePath = path.join(__dirname, appSettingsFile);
const dotenv = dotEnvModules.config({
  path: envFilePath,
});

module.exports = {
  name: "UI",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  devServer: {
    historyApiFallback: true, // It prevents the reload issue and direct searching by paths.
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: [/node_modules/, /public/],
        include: path.join(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
