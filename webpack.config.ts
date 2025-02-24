import path from "node:path";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default {
  entry: { background: "./src/background.ts", content: "./src/content.ts" },
  // eslint-disable-next-line unicorn/prefer-module
  output: { filename: "[name].js", path: path.resolve(__dirname, "dist") },
  resolve: { extensions: [".ts", ".js"] },
  module: { rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }] },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "rules.json", to: "rules.json" },
        { from: "manifest.json", to: "manifest.json" },
        { from: "src/icons", to: "icons" },
      ],
    }),
  ],
  mode: "development",
  devtool: "source-map",
};
