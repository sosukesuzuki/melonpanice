const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const MODE = process.env.NODE_ENV || "development";
const DEV = MODE == "development";

const copyRules = [
  {
    from: __dirname + "/src/index.html",
    to: __dirname + "/dist/index.html"
  },
  {
    from: __dirname + "/assets",
    to: __dirname + "/dist"
  }
];

function createPlugins() {
  const common = [new CopyPlugin(copyRules)];
  return DEV
    ? common.concat(new Dotenv())
    : common.concat(
        new webpack.EnvironmentPlugin(
          ["FIREBASE_API_KEY"],
          ["FIREBASE_AUTH_DOMAIN"],
          ["FIREBASE_DATABASE_URL"],
          ["FIREBASE_PROJECT_ID"]
        )
      );
}

module.exports = {
  mode: MODE,
  devtool: DEV ? "inline-source-map" : "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@lib": path.resolve(__dirname, "src/lib"),
      "@components": path.resolve(__dirname, "src/components")
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        include: [path.join(__dirname, "src")],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader/url" }, { loader: "file-loader" }]
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  },
  plugins: createPlugins()
};
