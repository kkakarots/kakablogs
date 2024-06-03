import { DefaultTheme } from "vitepress";
export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "图形学",
    items: [
      {
        text: "图形学基础(GAMES101)",
        link: "/columnGraphics/Graphics/",
      },
      {
        text: "OpenGL",
        link: "/columnGraphics/OpenGL/",
      },
      {
        text: "WebGL",
        link: "/columnGraphics/WebGL/",
      },
      {
        text: "WebGPU",
        link: "/columnGraphics/WebGPU/",
      },
      {
        text: "DirectX",
        link: "/columnGraphics/DirectX/",
      },
    ],
  },
  {
    text: "Web3D",
    items: [
      {
        text: "cesium",
        link: "/columnWeb3D/Cesium/",
      },
      {
        text: "three.js",
        link: "/columnWeb3D/Threejs/",
      },
    ],
  },
  {
    text: "编程语言",
    items: [
      {
        text: "C++",
        link: "/columnLan/C++/",
      },
      {
        text: "Java",
        link: "/columnLan/Java/",
      },
      {
        text: "JavaScript",
        link: "/columnLan/JavaScript/",
      },
      {
        text: "TypeScript",
        link: "/columnLan/TypeScript/",
      },
    ],
  },
  {
    text: "计算机基础",
    items: [
      {
        text: "计算机网络",
        link: "/columnBase/NetWork/",
      },
      {
        text: "操作系统",
        link: "/columnBase/OS/",
      },
      {
        text: "数据结构",
        link: "/columnBase/DataStructure/",
      },
      {
        text: "程序设计",
        link: "/columnBase/Programming/",
      },
    ],
  },
  {
    text: "后端",
    items: [
      {
        text: "数据库",
        link: "/columnBack/Database/",
      },
      {
        text: "即时通信",
        link: "/columnBack/Message/",
      },
    ],
  },
  {
    text: "前端",
    items: [
      {
        text: "Web开发",
        link: "/columnFront/Com/",
      },
      {
        text: "Vue3",
        link: "/columnFront/Vue3/",
      },
    ],
  },
  // {
  //   text: "项目",
  //   items: [
  //     {
  //       text: "设计软件",
  //       link: "/columnProject/DesignSW/",
  //     },
  //   ],
  // },
  // {
  //   text: "关于我",
  //   items: [
  //     {
  //       text: "Github",
  //       link: "https://github.com/",
  //     },
  //   ],
  // },
];
