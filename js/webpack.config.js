/* eslint-disable no-process-env */
/**
 * Bootstrap's webpack config
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
const webpack = require('webpack')
const WrapperPlugin = require('wrapper-webpack-plugin')
const path = require('path')

const modules = {
  alert: 'Alert',
  button: 'Button',
  carousel: 'Carousel',
  collapse: 'Collapse',
  dropdown: 'Dropdown',
  modal: 'Modal',
  popover: 'Popover',
  scrollspy: 'ScrollSpy',
  tab: 'Tab',
  tooltip: 'Tooltip',
  util: 'Util'
}

function resolveToModule(name) {
  return `./${path.join('js', 'src', `${name.toLowerCase()}.js`)}`
}

function mapEntries() {
  const bootstrap = Object.keys(modules).map((key) => resolveToModule(modules[key]))
  const mods = Object.keys(modules).reduce((acc, key) => {
    acc[key] = [resolveToModule(modules[key])]
    return acc
  }, {})
  return Object.assign({}, {
    bootstrap
  }, mods)
}

module.exports = {
  entry: mapEntries(),
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },
  devtool: 'source-map',
  plugins: [
    new WrapperPlugin({
      header:'\nwindow.__BOOTSTRAP_SECRET_AUTO_INIT_VARIABLE = window.__BOOTSTRAP_SECRET_AUTO_INIT_VARIABLE || true;\n\n'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  output: {
    path: path.join('js', 'dist'),
    filename: process.env.BOOTSTRAP_CREATE_STANDALONE ? '[name].js' : '[name].standalone.js'
  },
  externals: process.env.BOOTSTRAP_CREATE_STANDALONE ? {
    jquery: '$',
    tether: 'Tether'
  } : null
}
