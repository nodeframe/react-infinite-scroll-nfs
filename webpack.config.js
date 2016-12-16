module.exports = {
  entry: './lib/react-infinite-scroll-nfs.js',
  output: {
    filename: './dist/react-infinite-scroll-nfs.js',
    sourceMapFilename: './dist/react-infinite-scroll-nfs.map',
    libraryTarget: 'umd'
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
