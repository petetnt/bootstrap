/**
 * Bootstrap's webpack config
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
const WrapperPlugin = require('wrapper-webpack-plugin')
const path = require('path')

const modules = {
  alert: 'Alert'
  // Button: 'Button',
  // Carousel: 'Carousel',
  // Collapse: 'Collapse',
  // Dropdown: 'Dropdown',
  // Modal: 'Modal',
  // Popover: 'Popover',
  // ScrollSpy: 'ScrollSpy',
  // Tab: 'Tab',
  // Tooltip: 'Tooltip'
}

function resolveToModule(name) {
  return `./${path.join('src', `${name.toLowerCase()}.js`)}`
}

module.exports = {
  entry: {
    bootstrap: Object.keys(modules).map((key) => resolveToModule(modules[key])),
    alert: [resolveToModule(modules.alert)]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },
  plugins: [
    new WrapperPlugin({
      header:'\nwindow.__BOOSTRAP_SECRET_AUTO_INIT_VARIABLE = window.__BOOTSTRAP_SECRET_AUTO_INIT_VARIABLE || true;\n\n'
    })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].browser.js'
  }
}
