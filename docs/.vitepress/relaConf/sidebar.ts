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
          text: "OpenGL简介",
          link: "/columnGraphics/OpenGL/index.md",
        },
      ],
    },
    // Second part
    {
      text: "来自博主Cherno的OpenGL教程",
      items: [
        {
          text: "01.Setting up OpenGL and creating a window in C++",
          link: "/columnGraphics/OpenGL/001.md",
        },
        {
          text: "02.Using Modern OpenGL in C++",
          link: "/columnGraphics/OpenGL/002.md",
        },
        {
          text: "03.Vertex Buffers and Drawing a Triangle in OpenGL",
          link: "/columnGraphics/OpenGL/003.md",
        },
        {
          text: "04.Vertex Attributes and Layouts in OpenGL",
          link: "/columnGraphics/OpenGL/004.md",
        },
        {
          text: "05.How Shaders Work in OpenGL",
          link: "/columnGraphics/OpenGL/005.md",
        },
        {
          text: "06.Writing a Shader in OpenGL",
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
   * └─ 操作系统
   */

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
