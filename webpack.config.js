const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/js/index.js', './src/js/form.js'],

  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: (pathData) => {
      const filePath = path
        .dirname(pathData.filename)
        .split('/')
        .slice(1)
        .join('/');
      return `${filePath}/[name][ext]`;
    },
  },
  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|otf|ttf|eot)$/,
        type: 'asset/resource',
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|xml|webmanifest)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'quem-somos.html',
      template: 'src/quem-somos.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'o-que-fazemos.html',
      template: 'src/o-que-fazemos.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'RCInsights.html',
      template: 'src/RCInsights.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'artigo.html',
      template: 'src/artigo.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'insight.html',
      template: 'src/insight.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'case.html',
      template: 'src/case.html',
    }),
    new CleanWebpackPlugin(),
  ],

  performance: {
    hints: false,
  },
};
