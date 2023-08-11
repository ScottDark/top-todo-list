"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  const isProduction = options.mode === "production";

  const config = {
    mode: isProduction ? "production" : "development",
    entry: "./src/js/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 8080,
      hot: true,
      client: {
        logging: "none",
        overlay: false,
      },
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [autoprefixer],
                },
              },
            },
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              loader: "ignore-loader",
              options: {
                resourceQuery:
                  /Deprecation Passing percentage units to the global abs\(\) function is deprecated/,
              },
            },
          ],
        },
      ],
    },
  };

  if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin());
  }

  return config;
};
