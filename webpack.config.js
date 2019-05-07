var path = require("path");

module.exports = {
  entry: "./_src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "_src"),
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  externals: {
    "react": "commonjs react"
  }
};
