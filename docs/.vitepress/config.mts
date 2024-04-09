import { defineConfig } from "vitepress";
import { nav, sidebar } from "./relaConf";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/Imgs/favicon-1.svg" }],
  ],
  title: "Kaka Blogs",
  description: "记录",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/Avatar/avatar_0.png",
    siteTitle: false,
    // 顶部导航
    nav: nav,
    // 左侧导航
    sidebar: sidebar,
    // 顶部右侧ICON
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    // 文章右侧导航
    outline: {
      level: [2, 6],
      label: "目录",
    },
    // 本地搜索
    search: {
      provider: "local",
    },
  },
  // markdown扩展
  markdown: {
    math: true
  },
  vite:{
    // plugins: [
    //   // 其他插件
    //   require('vite-plugin-md')()
    // ]
  }
});
