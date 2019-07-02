const nodeExternals = require('webpack-node-externals')

const clientConfig = {
  name: 'client',
  entry: './src/client/browser.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build/public'
  },
  devtool: 'source-map',
  cache: true,
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          reportFiles: ['src/client/**/*.{ts,tsx}']
        }
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: []
}

const serverConfig = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server/server.ts',
  output: {
    filename: 'server.js',
    path: __dirname + '/build'
  },
  optimization: {
    nodeEnv: false
  },
  devtool: 'source-map',
  cache: true,
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: []
}

module.exports = [clientConfig, serverConfig]
