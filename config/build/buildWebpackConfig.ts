import { buildLoader } from "./buildLoader";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack  from "webpack"

import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions):webpack.Configuration{
    const {paths,mode,isDev} = options;
    return {
        mode: mode,
        entry:paths.entry,
        output: {
          filename: "[name].[contenthash].js",
          path: paths.build,
          clean: true,
        },
        module: {
          rules: buildLoader(options),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
        devtool: isDev?'inline-source-map':undefined,
        devServer: isDev? buildDevServer(options) :undefined,
      }
}