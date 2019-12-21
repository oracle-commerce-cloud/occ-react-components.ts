const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-build-notifier');

const { createWebpackEntries } = require("./utils");
const { webpackConfig } = require("../package");

const resolve = (dir) => path.resolve(__dirname, '..', dir)


module.exports = (config, env) => {
  const isEnvLocal = !process.env.NODE_LOCAL;
  const isEnvProduction = config.mode === "production";

  const EXCLUDED_PLUGINS = [
    'InlineChunkHtmlPlugin',
    'InterpolateHtmlPlugin',
    // 'ModuleNotFoundPlugin',
    // 'DefinePlugin',
    // 'MiniCssExtractPlugin',
    'ManifestPlugin',
    // 'IgnorePlugin',
    'GenerateSW',
    // 'ForkTsCheckerWebpackPlugin'
    ...(
      isEnvLocal
        ? []
        : ['HtmlWebpackPlugin']
    ),
  ];

  const requireWebpackHotDevClient = (
    isEnvProduction
      ? [] :
      [require.resolve('react-dev-utils/webpackHotDevClient')]
  )

  const MAIN_CHUNK_ENTRIES = createWebpackEntries(
    isEnvLocal ? webpackConfig : { entries: { "index": "./src/index.tsx" }},
    requireWebpackHotDevClient
  );

  return ({
    ...config,
    mode: config.mode,
    entry: MAIN_CHUNK_ENTRIES,
    devtool: isEnvProduction ? "none" : "eval-source-map",
    output: {
      ...config.output,
      ...(
        isEnvProduction
          ? {
            libraryTarget: 'amd',
            filename: '[name].[hash].js',
            chunkFilename: '[name].[hash].js',
          }
          : isEnvLocal ? {
            libraryTarget: 'amd',
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
          } : {
            filename: '[name].[hash].js',
            chunkFilename: '[name].[hash].js',
          }
      ),
    },
    externals: {
      ...config.externals,
      knockout: 'knockout',
      pubsub: 'pubsub',
      ccConstants: 'ccConstants',
      ccRestClient: 'ccRestClient',
      navigation: 'navigation',
      notifier: 'notifier',
      ccLogger: 'ccLogger',
      CCi18n: 'CCi18n',
      ccNumber: 'ccNumber',
      currencyHelper: 'currencyHelper',
      numberFormatHelper: 'numberFormatHelper',
      'pageLayout/product': 'pageLayout/product',
      'ojs/ojcore': 'ojs/ojcore',
      'ojs/ojvalidation': 'ojs/ojvalidation',
      ...(
        isEnvLocal
          ? { jquery: 'jquery' }
          : {}
      ),
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          extractComments: true,
          test: /\.js(\?.*)?$/i,
          uglifyOptions: {
            compress: {
              drop_console: true
            }
          },
        }),
      ],
      ...(
        isEnvLocal
          ? {
            runtimeChunk: {
              name: 'runtime',
            },
            splitChunks: {
              chunks: 'all',
              cacheGroups: {
                vendors: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  priority: -10,
                },
                default: {
                  minChunks: 2,
                  priority: -20,
                  name: 'commons',
                  reuseExistingChunk: true,
                },
              },
            },
          }
          : {}
      ),
    },
    plugins: [
      ...(
        !isEnvProduction
          ? [
            ...config.plugins,
            new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
            new WebpackNotifierPlugin(),
            // new FriendlyErrorsWebpackPlugin(),
          ]
          : config.plugins.filter(item => !EXCLUDED_PLUGINS.includes(item.constructor.name))
      ),
      // new BundleAnalyzerPlugin(),
    ],
  })
}
