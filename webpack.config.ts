import webpack from 'webpack'
import { BuildWebpackConfig } from './config/build/BuildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'
import path from 'path'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'PageError.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'pageError.html'),
  src: path.resolve(__dirname, 'src')
}

export default (env: BuildEnv) => {
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000

  const config: webpack.Configuration = BuildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })
  return config
}
