'use strict'
const path = require('path')
// const globImporter = require('node-sass-glob-importer')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')


function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

exports.createLintingRule = () => ({
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  enforce: 'pre',
  use: [
    {
      options: {
        formatter: require.resolve('react-dev-utils/eslintFormatter'),
        eslintPath: require.resolve('eslint'),
      },
      loader: require.resolve('eslint-loader'),
    },
  ],
  include: [resolve('src'), resolve('test')],
})

exports.createWebpackEntries = (webpackConfig, requireWebpackHotDevClient) => (
  Object
    .entries(webpackConfig.entries)
    .reduce((entries, [entryChunkName, entryChunkPath]) => ({
      ...entries,
      [entryChunkName]: [...requireWebpackHotDevClient, entryChunkPath]
    }), {})
)



exports.addLessLoader = (loaderOptions = {}) => config => {
  const mode = process.env.NODE_ENV === "development" ? "dev" : "prod";

  console.log(process.env.NODE_ENV)

  // Need these for production mode, which are copied from react-scripts
  const shouldUseSourceMap = mode === "prod" && process.env.GENERATE_SOURCEMAP !== "false";
  const lessRegex = /\.less$/;
  const lessModuleRegex = /\.module\.less$/;
  const localIdentName = loaderOptions.localIdentName || "[path][name]__[local]--[hash:base64:5]";

  const getLessLoader = cssOptions => {
    return [
      require.resolve("style-loader"),
      {
        loader: require.resolve("css-loader"),
        options: cssOptions
      },
      {
        loader: require.resolve("postcss-loader"),
        options: {
          ident: "postcss",
          plugins: () => [
            require("postcss-flexbugs-fixes"),
            require("postcss-preset-env")({
              autoprefixer: {
                flexbox: "no-2009"
              },
              stage: 3
            })
          ],
          sourceMap: shouldUseSourceMap
        }
      },
      {
        loader: require.resolve("less-loader"),
        options: Object.assign(loaderOptions, {
          source: shouldUseSourceMap
        })
      }
    ];
  };

  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    .oneOf;

  // Insert less-loader as the penultimate item of loaders (before file-loader)
  loaders.splice(loaders.length - 1, 0, {
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getLessLoader({
      importLoaders: 2
    }),
    sideEffects: mode === "prod"
  }, {
    test: lessModuleRegex,
    use: getLessLoader({
      importLoaders: 2,
      modules: true,
      localIdentName: localIdentName
    })
  });

  return config;
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = addLessLoader(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
