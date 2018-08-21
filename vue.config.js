/* vue config file */
const path = require('path')

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [  
        path.resolve(__dirname, './src/assets/styles/variables.scss'), 
      ]
    }
  }
}