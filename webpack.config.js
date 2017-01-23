var webpack = require('webpack');

module.exports = {
  entry: {
    bundle:['./src/main.js']
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'dist/[name].js'
  },
  // 服务器配置相关，自动刷新!
  devServer: {
      historyApiFallback: true,
      hot: false,
      inline: true,
      grogress: true,
  },
  module: {
    loaders: [
      {test: /\.html$/, loaders: ['html']},
      {test: /(\.js)$/, loader:["babel"] ,exclude:/node_modules/, 
       query:{
          presets:["es2015"]
       }
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  }
}