import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"

module.exports = {
    entry: './index.html', // Add this line if you have an entry point
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js', // Update if you have JS files
    },
    module: {
      rules: [
        // Add rules for CSS, JS, etc. if needed
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html', // Template file
        filename: 'index.html',   // Output file in `dist`
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src', to: 'src' }, // Copy additional files if needed
        ],
      }),
    ],
  };