const menuList = [
  {
    name: '读书',
    link: '/'
  },
  {
    name: '电影',
    link: '/movie'
  },
  {
    name: '音乐',
    link: '/music'
  },
  {
    name: '关于我们',
    link: '/about'
  }
]

const footerConfig = {
  year: new Date().getFullYear(),
  author: " Leslie Chiang ",
  copyrightSign: "Copyright © ",
  rights: " All rights reserved ",
  email: ". jiangqizhi@aliyun.com"
}
const footerInfo = `${footerConfig.copyrightSign}${footerConfig.year}${footerConfig.author}${footerConfig.rights}${footerConfig.email}`

const logoName = 'panda'
const mission = `人民有信仰，国家有力量，民族有希望`

export {
  menuList,
  logoName,
  mission,
  footerInfo
}
