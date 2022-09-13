import {BuildOptions} from "./types/config";
import webpack from "webpack";

import {buildPlugins} from "./buildPlugins";
import {buildRules} from "./buildRules";
import {buildResolvers} from "./buildResolvers";

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode} = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildRules(),
    },
    resolve: buildResolvers(),
  }
}