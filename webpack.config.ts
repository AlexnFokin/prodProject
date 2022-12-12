import webpack from 'webpack'
import { BuildWebpackConfig } from './config/build/BuildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'
import path from 'path'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
  locales: path.resolve(__dirname, 'public', 'locales'),
  buildLocales: path.resolve(__dirname, 'build', 'locales')
}

export default (env: BuildEnv) => {
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000
  const apiUrl = env.apiUrl || 'http://localhost:8000'

  const config: webpack.Configuration = BuildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend'
  })
  return config
}
