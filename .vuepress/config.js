module.exports = (site) => ({
    title: "李江锦的个人主页",
    head: [
      ['link', { rel: 'icon', href: '/logo.ico' }], // favicon.ico在public目录
    ],
    //theme: 'vuepress-theme-default',
    ga: 'UA-xxx-1',//待修改
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    },
    themeConfig: {
      // repo: "https://github.com/xuzhongpeng",//待修改
      // logo: '/images/logo.png',//待修改
      // editLinkText: "有问题，联系我",//待修改
      search: false,
      tags: "tags",
      markdown: {
        anchor: { permalink: true },
      },
      activeHeaderLinks: false, // 默认值：true 禁用活动的标题链接
      //sidebar: "auto",
      //sidebarDepth: 2,
      lastUpdated: "Last Updated",
      nav: [
        { text: "作品", link: "/post/mywork"},
        { text: "简历", link: "/post/resume"},
        { text: "证书集", link: "/post/certificate"},
        { text: "回忆墙", link: "/post/memory"},
        { text: "大学情", link: "/post/college"},
        { text: "生活录", link: "/post/life"},
        { text: "诗词作", link: "/post/poetry"},
        { text: "关于我", link: "/post/about"},
        { text: "时间轴", link: "/post/timeline"},
      ]
    },
    plugins: [
      ['@vuepress/back-to-top'],
      ['@oak-tree-house/encrypt']
    ],
    footer: {
      startyear: 2019,
      icpname: "桂ICP备10003672号-3",
      icplink: "https://beian.miit.gov.cn/"
    }
  });
  