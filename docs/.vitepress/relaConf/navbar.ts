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
        text: "图形学基础(Games 101)*",
        link: "/Graphics/Graphics/",
      },
      {
        text: "着色器(Shader)*",
        link: "/Graphics/Shader/",
      },
      {
        text: "OpenGL",
        link: "/Graphics/OpenGL/",
      },
      {
        text: "WebGL*",
        link: "/Graphics/WebGL/",
      },
      {
        text: "WebGPU*",
        link: "/Graphics/WebGPU/",
      },
      {
        text: "DirectX",
        link: "/Graphics/DirectX/",
      },
    ],
  },
  {
    text: "Web3D",
    items: [
      {
        text: "cesium",
        link: "/Web3D/Cesium/",
      },
      {
        text: "Three.js※",
        link: "/Web3D/Threejs/",
      },
      {
        text: "常见问题",
        link: "/Web3D/Universal/",
      },
    ],
  },
  {
    text: "编程语言",
    items: [
      {
        text: "C++*",
        link: "/Lan/C++/",
      },
      {
        text: "Java",
        link: "/Lan/Java/",
      },
      {
        text: "JavaScript*",
        link: "/Lan/JavaScript/",
      },
      {
        text: "TypeScript*",
        link: "/Lan/TypeScript/",
      },
      {
        text: "Common",
        link: "/Lan/common/",
      },
    ],
  },
  {
    text: "计算机基础",
    items: [
      {
        text: "计算机网络",
        link: "/Base/NetWork/",
      },
      {
        text: "操作系统",
        link: "/Base/OS/",
      },
      {
        text: "数据结构*",
        link: "/Base/DataStructure/",
      },
      {
        text: "程序设计*",
        link: "/Base/Programming/",
      },
    ],
  },
  {
    text: "后端",
    items: [
      {
        text: "数据库",
        link: "/Back/Database/",
      },
      {
        text: "即时通信",
        link: "/Back/Message/",
      },
    ],
  },
  {
    text: "前端",
    items: [
      {
        text: "Web开发*",
        link: "/Front/Com/",
      },
      {
        text: "Vue",
        link: "/Front/Vue3/",
      },
      {
        text: "React",
        link: "/Front/React/",
      },
    ],
  },
  {
    text: "Kaka",
    link: "/User/Info/",
  },
  // {
  //   text: "项目",
  //   items: [
  //     {
  //       text: "设计软件",
  //       link: "/Project/DesignSW/",
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
