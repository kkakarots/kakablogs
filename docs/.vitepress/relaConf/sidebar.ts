import { DefaultTheme } from "vitepress";
export const sidebar: DefaultTheme.Sidebar = {
  /**
   * 图形学
   * ├─ 图形学基础
   * ├─ OpenGL
   * ├─ WebGL
   * ├─ WebGPU
   * └─ DirectX
   */
  "/columnGraphics/Graphics/": [
    // First part
    {
      text: "简介",
      items: [
        {
          text: "图形学简介",
          link: "",
        },
      ],
    },
    // Second part
    {
      text: "第一部分",
      items: [
        {
          text: "线代基础",
          link: "",
        },
      ],
    },
  ],
  "/columnGraphics/OpenGL/": [
    // First part
    {
      text: "简介",
      items: [
        {
          text: "01.欢迎来到OpenGL",
          link: "/columnGraphics/OpenGL/index.md",
        },
      ],
    },
    // Second part
    {
      text: "来自博主Cherno的OpenGL教程",
      items: [
        {
          text: "02.设置OpenGL和在C++中创建一个窗口",
          link: "/columnGraphics/OpenGL/001.md",
        },
        {
          text: "03.在C++中使用现代OpenGL",
          link: "/columnGraphics/OpenGL/002.md",
        },
        {
          text: "04.顶点缓冲区和在现代OpenGL中画一个三角形",
          link: "/columnGraphics/OpenGL/003.md",
        },
        {
          text: "05.在OpenGL中顶点的属性和布局",
          link: "/columnGraphics/OpenGL/004.md",
        },
        {
          text: "06.在OpenGL中着色器的原理",
          link: "/columnGraphics/OpenGL/005.md",
        },
        {
          text: "07.在OpenGL中写一个着色器",
          link: "/columnGraphics/OpenGL/006.md",
        },
      ],
    },
  ],
  "/columnGraphics/WebGL/": [
    // First part
    {
      text: "简介",
      items: [
        {
          text: "WebGL简介",
          link: "",
        },
      ],
    },
    // Second part
    {
      text: "第一部分",
      items: [
        {
          text: "",
          link: "",
        },
      ],
    },
  ],
  "/columnGraphics/WebGPU/": [
    // First part
    {
      text: "简介",
      items: [
        {
          text: "WebGPU简介",
          link: "",
        },
      ],
    },
    // Second part
    {
      text: "第一部分",
      items: [
        {
          text: "",
          link: "",
        },
      ],
    },
  ],
  "/columnGraphics/DirectX/": [
    // First part
    {
      text: "简介",
      items: [
        {
          text: "DirectX简介",
          link: "",
        },
      ],
    },
    // Second part
    {
      text: "第一部分",
      items: [
        {
          text: "",
          link: "",
        },
      ],
    },
  ],

  /**
   * 编程语言
   * ├─ C++
   * ├─ Java
   * ├─ JavaScript
   * └─ TypeScript
   */

  /**
   * 计算机基础
   * ├─ 计算机网络
   * ├─ 操作系统
   * ├─ 数据结构
   * └─ C程序设计
   */
  "/columnBase/DataStructure/": [
    // First part
    {
      text: "数据结构",
      items: [
        {
          text: "简介",
          link: "/columnBase/DataStructure/index.md",
        },
        {
          text: "第一章",
          link: "/columnBase/DataStructure/001.md",
        },
        {
          text: "第二章",
          link: "/columnBase/DataStructure/002.md",
        },
      ],
    },
  ],
  "/columnBase/C/": [
    // First part
    {
      text: "C程序设计",
      items: [
        {
          text: "简介",
          link: "/columnBase/C/index.md",
        },
      ],
    },
  ],

  /**
   * 后端
   * ├─ 数据库
   * ├─
   * ├─
   * └─
   */

  /**
   * 前端
   * ├─ Vue3
   * ├─
   * ├─
   * └─
   */
};