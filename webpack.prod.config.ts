import path from 'path';
import type { Configuration } from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './webpack.base';

const config: Configuration = {
  mode: 'production',
  entry: ['./src/assets/scss/style.scss', './src/index.tsx'],
  name: 'bundle',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `[name].[contenthash].js?var=${new Date()}`,
    publicPath: '',
  },
};

export default merge<Configuration>(baseConfig, config);
