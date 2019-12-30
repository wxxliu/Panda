import { IConfig } from 'umi-types';
import { resolve } from 'path';
import proxy from './config/proxy';

const isProduction = process.env.NODE_ENV === 'production';

// ref: https://umijs.org/config/
const config: IConfig =  {
  // history
  // urlå¸  onhashchange
  hash: true,
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true,
      },
      links: [
        {
          rel: 'shortcut icon',
          href: '/favicon.ico',
          type: 'image/x-icon',
        },
      ],
      dynamicImport: { webpackChunkName: true },
      title: 'Panda',
      dll: {
        include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch', 'antd/es'],
      },
      minimizer: 'terserjs',
      locale: {
        enable: true,
        baseNavigator: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /models\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  terserJSOptions: {
    cache: true,
    parallel: true,
  },
  targets: {
    chrome: 49,
    firefox: 52,
  },
  alias: {
    '@': resolve(__dirname, './src'),
		api: resolve(__dirname, './src/services/'),
    assets: resolve(__dirname, './src/assets'),
    components: resolve(__dirname, './src/components'),
    constants: resolve(__dirname, './src/constants'),
    services: resolve(__dirname, './src/services'),
    themes: resolve(__dirname, './src/themes'),
    utils: resolve(__dirname, './src/utils'),
    config: resolve(__dirname, './config'),
  },
  // proxy: isProduction === 'production' ? {} : proxy,
  proxy: proxy,
}

export default config;
