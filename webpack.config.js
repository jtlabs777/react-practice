const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

// Check if the current environment is in development mode
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  // Your existing webpack configuration
  mode: isDevelopment ? 'development' : 'production',
  // ...

  // Add the following lines
  plugins: [
    // Your existing plugins
    // ...

    // Add the ReactRefreshWebpackPlugin conditionally only in development mode
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),

  module: {
    rules: [
      // Your existing rules
      // ...

      // Add the following rule for handling JavaScript and JSX files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              // Apply babel-preset-react-app only in development mode
              presets: [
                isDevelopment && require.resolve('babel-preset-react-app'),
              ].filter(Boolean),
              // Enable react-refresh Babel plugin only in development mode
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },

  // Enable source maps in development mode
  devtool: isDevelopment ? 'cheap-module-source-map' : false,

  // Enable the webpack-dev-server with live reload
  devServer: {
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser
    historyApiFallback: true, // Fallback to index.html for single-page apps
  },
};
