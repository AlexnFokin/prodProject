import { BuildOptions } from '../types/config'
import babelRemovesPropsPlugin from '../../babel/babelRemovesPropsPlugin'

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean
}

export function buildBabelLoader (options: BuildBabelLoaderProps) {
  const { isDev, isTsx } = options
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude:
    /node_modules/,
    use:
    {
      loader: 'babel-loader',
      options:
      {
        presets: ['@babel/preset-env'],
        plugins:
        [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx
            }
          ],
          '@babel/plugin-transform-runtime',
          isTsx && [
            babelRemovesPropsPlugin,
            {
              props: ['data-testid']
            }
          ],
          isDev && require.resolve('react-refresh/babel')
        ].filter(Boolean)
      }
    }
  }
}
