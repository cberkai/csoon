const path = require("path");

module.exports = {
  entry: "./public/js/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  watch: true,
};
