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
          text: "课程简介",
          link: "/columnGraphics/Graphics/index.md",
        },
      ],
    },
    // Second part
    {
      text: "内容",
      items: [
        {
          text: "01.第一节课",
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
        {
          text: "08.处理着色器",
          link: "/columnGraphics/OpenGL/008.md",
        },
        {
          text: "09.索引缓冲区",
          link: "/columnGraphics/OpenGL/009.md",
        },
        {
          text: "10.错误处理",
          link: "/columnGraphics/OpenGL/010.md",
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
   * Web3D
   * ├─ cesium
   * └─ three.js
   */
  "/columnWeb3D/Cesium/": [
    {
      text: "简介",
      items: [
        {
          text: "cesium简介",
          link: "/columnWeb3D/Cesium/index.md",
        },
      ],
    },
    {
      text: "记录",
      items: [
        {
          text: "大数据量3dtiles模型构件的显隐",
          link: "/columnWeb3D/Cesium/001.md",
        },
        {
          text: "根据已有数据计算相机参数",
          link: "/columnWeb3D/Cesium/002.md",
        },
        {
          text: "坐标转换库",
          link: "/columnWeb3D/Cesium/003.md",
        },
        {
          text: "处理WMS请求",
          link: "/columnWeb3D/Cesium/004.md",
        },
        {
          text: "实时轨迹",
          link: "/columnWeb3D/Cesium/005.md",
        },
        {
          text: "3d文字",
          link: "/columnWeb3D/Cesium/006.md",
        },
      ],
    },
  ],
  "/columnWeb3D/Threejs/": [
    {
      text: "简介",
      items: [
        {
          text: "three.js简介",
          link: "/columnWeb3D/Threejs/index.md",
        },
      ],
    },
    {
      text: "记录",
      items: [
        {
          text: "TODO",
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
   * └─ 程序设计
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
          text: "绪论",
          link: "/columnBase/DataStructure/001.md",
        },
        {
          text: "线性表",
          link: "/columnBase/DataStructure/002.md",
        },
      ],
    },
  ],
  "/columnBase/Programming/": [
    // First part
    {
      text: "程序设计",
      items: [
        {
          text: "简介",
          link: "/columnBase/Programming/index.md",
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
   * ├─ 通用
   * ├─ Vue3
   * ├─
   * └─
   */
  "/columnFront/Com/": [
    {
      text: "简介",
      items: [
        {
          text: "简介",
          link: "/columnFront/Com/index.md",
        },
      ],
    },
    {
      text: "记录",
      items: [
        {
          text: "TODO",
          link: "",
        },
      ],
    },
  ],
   "/columnFront/Vue3/": [
    {
      text: "简介",
      items: [
        {
          text: "Vue3简介",
          link: "/columnFront/Vue3/index.md",
        },
      ],
    },
    {
      text: "记录",
      items: [
        {
          text: "TODO",
          link: "",
        },
      ],
    },
  ],

  /**
   * 项目
   * ├─ 设计软件
   * ├─
   * ├─
   * └─
   */
   "/columnProject/DesignSW/": [
    {
      text: "简介",
      items: [
        {
          text: "设计软件",
          link: "/columnProject/DesignSW/index.md",
        },
      ],
    },
    {
      text: "具体",
      items: [
        {
          text: "TODO",
          link: "",
        },
      ],
    },
  ],
};
