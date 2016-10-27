module.exports = {
  entry:[ "./app/global.js","./app/logger.es6", "./app.js"],
  output: {
    filename: "bundle.js"
  },
  watch: true,

  module: {
    preLoaders: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'jshint-loader'

       }
    ],
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
}
