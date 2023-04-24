import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import * as dotenv from 'dotenv';
import Dotenv from 'dotenv-webpack';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import type { Configuration as WebpackConfiguration } from 'webpack';
import webpack from 'webpack';
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
dotenv.config();

const scriptExtensions = /\.(tsx|ts|js|jsx|mjs)$/;
const imageExtensions = /\.(bmp|gif|jpg|jpeg|png)$/;
const fontsExtension = /\.(eot|otf|ttf|woff|woff2)$/;

// dev mode
const devMode = process.env.MODE === 'development';

/* 
polyfill node core modules in webpack 5
https://www.alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5
https://webpack.js.org/configuration/resolve/#resolvefallback
*/
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  resolve: {
    fallback: {
      buffer: require.resolve('buffer'),
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      os: require.resolve('os-browserify'),
      https: require.resolve('https-browserify'),
      fs: false,
    },
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: scriptExtensions,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // webpack has some built in asset modules you can use for static assets.
      {
        test: fontsExtension,
        type: 'asset',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: imageExtensions,
        type: 'asset/resource',
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /\.module\.(sa|sc|c)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false, // turned off as causes delay
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      // css module
      {
        test: /\.module\.(sa|sc|c)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]',
              },
              importLoaders: 2,
              sourceMap: false, // turned off as causes delay
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets/',
          to: '',
          globOptions: {
            ignore: ['**/scss/*.scss'],
          },
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new Dotenv(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};

export default config;
