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
    socialLinks: [
      { icon: "github", link: "https://gitee.com/CheneyChiu" },
      {
        icon: {
          svg: '<svg t="1712742711623" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4535" width="200" height="200"><path d="M208.979592 1024h606.040816c115.461224 0 208.979592-93.518367 208.979592-208.979592V208.979592C1024 93.518367 930.481633 0 815.020408 0H208.979592C93.518367 0 0 93.518367 0 208.979592v606.040816c0 115.461224 93.518367 208.979592 208.979592 208.979592z" fill="#03DB6C" p-id="4536"></path><path d="M308.558367 226.429388c83.382857-29.257143 175.333878-21.420408 252.656327 21.420408l-0.731429-0.313469c58.514286 30.72 100.728163 85.472653 115.461225 150.047346a265.404082 265.404082 0 0 0-197.799184 65.097143c-31.764898 28.630204-53.080816 66.873469-60.604082 108.878368-4.91102 30.406531-2.089796 61.44 8.045715 90.383673-37.929796 1.149388-75.859592-4.284082-112.117551-15.986939l-89.025306 48.169796c8.881633-26.226939 16.927347-52.349388 26.122449-78.576326a235.091592 235.091592 0 0 1-98.533878-134.478368c-12.747755-51.2-4.075102-105.430204 24.032653-149.942857 31.137959-48.901224 77.844898-85.786122 132.493061-104.698775z m217.547755 97.802449c-10.03102-7.209796-22.987755-9.195102-34.690612-5.22449a37.616327 37.616327 0 0 0-23.614694 29.152653c-2.089796 13.270204 3.030204 26.540408 13.479184 35.004082 10.762449 8.672653 25.39102 10.762449 38.138776 5.224489a37.302857 37.302857 0 0 0 22.256326-31.451428v-1.253878c0.20898-12.434286-5.642449-24.137143-15.56898-31.451428z m-217.547755-3.866123c-16.718367 6.060408-26.853878 23.092245-24.346122 40.751021a37.626776 37.626776 0 0 0 34.795102 32.287347c17.763265 1.149388 33.854694-10.34449 38.661224-27.480817 3.239184-13.583673-1.044898-27.794286-11.284898-37.198367-10.13551-9.404082-24.659592-12.643265-37.825306-8.359184z m461.740409 119.118368a201.247347 201.247347 0 0 1 93.831836 96.026122v-1.044898c19.644082 45.244082 17.972245 96.966531-4.702041 140.852245a218.770286 218.770286 0 0 1-68.440816 75.546122c6.791837 21.733878 13.583673 42.422857 20.58449 64.156735-25.286531-11.807347-47.020408-27.480816-73.142857-37.929796-42.840816 14.001633-88.398367 17.136327-132.702041 9.195102a220.891429 220.891429 0 0 1-149.733878-98.429387 160.956082 160.956082 0 0 1-20.37551-121.208164c13.061224-55.902041 50.886531-102.713469 102.71347-127.164081a255.038694 255.038694 0 0 1 231.967347 0zM561.737143 522.44898c-8.986122 12.016327-7.732245 28.943673 2.925714 39.497142a29.988571 29.988571 0 0 0 49.110204-10.448979 30.197551 30.197551 0 0 0-13.374694-37.302857 30.093061 30.093061 0 0 0-38.661224 8.254694z m168.64653-10.971429c-15.986939 0-25.077551 14.837551-28.525714 28.734694 1.358367 8.045714 4.806531 15.56898 10.24 21.733877 6.896327 6.582857 16.613878 9.508571 26.017959 7.941225 9.404082-1.671837 17.554286-7.523265 22.047347-16.091429 4.493061-9.717551 3.552653-21.106939-2.612245-29.884081a29.80049 29.80049 0 0 0-27.167347-12.434286z" fill="#FFFFFF" p-id="4537"></path></svg>',
        },
        link: "/userInfo/",
      },
    ],
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
    math: true,
  },
  vite: {
    // plugins: [
    //   // 其他插件
    //   require('vite-plugin-md')()
    // ]
  },
});
