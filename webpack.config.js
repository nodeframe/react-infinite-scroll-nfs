module.exports = {
  entry: './lib/react-infiniteScroll.js',
  output: {
    filename: './dist/react-infiniteScroll.js',
    sourceMapFilename: './dist/react-infiniteScroll.map',
    libraryTarget: 'umd',
    library: 'infiniteScroll'
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader',       
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {test: /\.svg$/, loader: 'raw-loader'}
    ]
  }
};