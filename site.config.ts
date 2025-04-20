import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'http://192.168.1.105:4859/',  //你网站的URL
  favicon: "data:image/jpeg;base64,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",	// 网页图标链接
  lang: 'zh-CN',  //默认语言
  title: "我的网站 - 一个纯牛马的网站",  //网站标题
  subtitle: '摸鱼天堂',//网站副标题
  author: {
    name: 'NANA',//博主名称
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfxGNwUz1HcvwlfbN7sqbeb6eMHh43XCRPA&s",	//头像链接
    status: {
      emoji: '💛'	// 头像旁边的emoji
    },
  },
  
  description: '这是一个相当适合摸鱼的地方，欢迎广大鱼友前来摸鱼',  //简介
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',  //这个是博客自带的RSS订阅，尽量留着，方便其他博友为你订阅
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: '',  //这里填写你的GitHub地址，不需要的话删除此字段即可
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: '',  //这里填写你的网易云音乐地址，不需要的话删除此字段即可
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: '',  //这里填写你的BiliBili地址，不需要的话删除此字段即可
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: '',  //这里填写你的Twitter地址，不需要的话删除此字段即可
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: 'E-Mail',
      link: 'mailto:YourEmail', //这里在mailto后面填写你的Email地址，不需要的话删除此字段即可
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: true,
  },
    comment: {
      enable: true
    },
    statistics: {
      enable: true,
      readTime: {
        /**
         * 阅读速度
         */
        speed: {
          cn: 300,
          en: 200,
        },
      },
    },

  sponsor: {
    enable: false, //关闭赞助
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: '', //这里填写你的支付宝收款码图片链接
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: '微信支付',
        url: '',//这里填写你的微信收款码图片链接
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})