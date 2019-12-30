const proxy = {
  '/api': {
    target: `https://api.douban.com/v2`,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  },
}

export default proxy
