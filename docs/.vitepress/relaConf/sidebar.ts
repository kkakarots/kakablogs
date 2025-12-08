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
  "/Graphics/Graphics/": [
    // First part
    {
      text: "简介",
      items: [
        {
          text: "课程简介",
          link: "/Graphics/Graphics/index.md",
        },
        {
          text: "渲染管线",
          link: "/Graphics/Graphics/渲染管线.md",
        },
        {
          text: "帧同步",
          link: "/Graphics/Graphics/帧同步.md",
        },
      ],
    },
    // Second part
    {
      text: "内容",
      items: [
        {
          text: "基础",
          link: "/Graphics/Graphics/001.md",
        },
        {
          text: "变换(Transformation)",
          link: "/Graphics/Graphics/002.md",
        },
        {
          text: "变换(Transformation Cont)",
          link: "/Graphics/Graphics/003.md",
        },
        {
          text: "光栅化(Rasterization)",
          link: "/Graphics/Graphics/004.md",
        },
        {
          text: "光栅化(Rasterization Cont)",
          link: "/Graphics/Graphics/005.md",
        },
        {
          text: "着色(Shading 1)",
          link: "/Graphics/Graphics/shading1.md",
        },
        {
          text: "着色(Shading 2)",
          link: "/Graphics/Graphics/shading2.md",
        },
        {
          text: "着色(Shading 3)",
          link: "/Graphics/Graphics/shading3.md",
        },
        {
          text: "几何(Geometry 1)",
          link: "/Graphics/Graphics/geometry1.md",
        },
        {
          text: "几何(Geometry 2)",
          link: "/Graphics/Graphics/geometry2.md",
        },
        {
          text: "几何(Geometry 3)",
          link: "/Graphics/Graphics/geometry3.md",
        },
        {
          text: "阴影贴图(Shadow mapping)",
          link: "/Graphics/Graphics/阴影贴图.md",
        },
        {
          text: "光线追踪(Ray Tracing 1)",
          link: "/Graphics/Graphics/raytracing1.md",
        },
        {
          text: "光线追踪(Ray Tracing 2)",
          link: "/Graphics/Graphics/raytracing2.md",
        },
        {
          text: "光线追踪(Ray Tracing 3)",
          link: "/Graphics/Graphics/raytracing3.md",
        },
        {
          text: "光线追踪(Ray Tracing 4)",
          link: "/Graphics/Graphics/raytracing4.md",
        },
        {
          text: "材质及外观(Materials and Appearances)",
          link: "/Graphics/Graphics/manda.md",
        },
        {
          text: "渲染中的高级主题(Advanced topics in rendering)",
          link: "/Graphics/Graphics/advancedtopics.md",
        },
        {
          text: "摄像机、镜头和光场(Cameras, Lenses and Light Fields)",
          link: "/Graphics/Graphics/cllf.md",
        },
        {
          text: "色彩与感知(Color and Perception)",
          link: "/Graphics/Graphics/cap.md",
        },
        {
          text: "动画(Animation)",
          link: "/Graphics/Graphics/animation.md",
        },
        {
          text: "动画(Animation Cont)",
          link: "/Graphics/Graphics/animationc.md",
        },
      ],
    },
  ],
  "/Graphics/Shader/": [
    // First part
    {
      text: "简介",
      items: [
        {
          text: "着色器简介",
          link: "/Graphics/Shader/index.md",
        },
      ],
    },
    // Second part
    {
      text: "内容",
      items: [
        {
          text: "基础",
          link: "/Graphics/Shader/index.md",
        },
      ],
    },
  ],
  "/Graphics/OpenGL/": [
    // First part
    {
      text: "简介",
      items: [
        {
          text: "01.欢迎来到OpenGL",
          link: "/Graphics/OpenGL/index.md",
        },
      ],
    },
    // Second part
    {
      text: "来自博主Cherno的OpenGL教程",
      items: [
        {
          text: "02.设置OpenGL和在C++中创建一个窗口",
          link: "/Graphics/OpenGL/001.md",
        },
        {
          text: "03.在C++中使用现代OpenGL",
          link: "/Graphics/OpenGL/002.md",
        },
        {
          text: "04.顶点缓冲区和在现代OpenGL中画一个三角形",
          link: "/Graphics/OpenGL/003.md",
        },
        {
          text: "05.在OpenGL中顶点的属性和布局",
          link: "/Graphics/OpenGL/004.md",
        },
        {
          text: "06.在OpenGL中着色器的原理",
          link: "/Graphics/OpenGL/005.md",
        },
        {
          text: "07.在OpenGL中写一个着色器",
          link: "/Graphics/OpenGL/006.md",
        },
        {
          text: "08.处理着色器",
          link: "/Graphics/OpenGL/008.md",
        },
        {
          text: "09.索引缓冲区",
          link: "/Graphics/OpenGL/009.md",
        },
        {
          text: "10.错误处理",
          link: "/Graphics/OpenGL/010.md",
        },
      ],
    },
  ],
  "/Graphics/WebGL/": [
    // First part
    {
      text: "简介",
      items: [
        {
          text: "WebGL简介",
          link: "/Graphics/WebGL/index.md",
        },
      ],
    },
    // Second part
    {
      text: "基础概念",
      items: [
        {
          text: "基础概念",
          link: "/Graphics/WebGL/基础概念/基础概念.md",
        },
        {
          text: "工作原理",
          link: "/Graphics/WebGL/基础概念/工作原理.md",
        },
        {
          text: "着色器和GLSL",
          link: "/Graphics/WebGL/基础概念/着色器和GLSL.md",
        },
        {
          text: "State Diagram",
          link: "/Graphics/WebGL/基础概念/StateDiagram.md",
        },
      ],
    },
    // Third part
    {
      text: "其它",
      items: [
        {
          text: "帧缓冲",
          link: "/Graphics/WebGL/其它/帧缓冲.md",
        },
        {
          text: "CAE",
          link: "/Graphics/WebGL/其它/CAE.md",
        },
      ],
    },
  ],
  "/Graphics/WebGPU/": [
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
  "/Graphics/DirectX/": [
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
  "/Web3D/Cesium/": [
    {
      text: "简介",
      items: [
        {
          text: "cesium简介",
          link: "/Web3D/Cesium/index.md",
        },
        {
          text: "常见问题",
          link: "/Web3D/Cesium/gis.md",
        },
      ],
    },
    {
      text: "源码解析",
      items: [
        {
          text: "源码解析-上",
          link: "/Web3D/Cesium/源码解析-上.md",
        },
        {
          text: "源码解析-下",
          link: "/Web3D/Cesium/源码解析-下.md",
        },
      ],
    },
    {
      text: "记录",
      items: [
        {
          text: "大数据量3dtiles模型构件的显隐",
          link: "/Web3D/Cesium/001.md",
        },
        {
          text: "根据已有数据计算相机参数",
          link: "/Web3D/Cesium/002.md",
        },
        {
          text: "坐标转换库",
          link: "/Web3D/Cesium/003.md",
        },
        {
          text: "处理WMS请求",
          link: "/Web3D/Cesium/004.md",
        },
        {
          text: "实时轨迹",
          link: "/Web3D/Cesium/005.md",
        },
        {
          text: "3d文字",
          link: "/Web3D/Cesium/006.md",
        },
        {
          text: "实体与地球遮挡关系优化",
          link: "/Web3D/Cesium/实体与地球遮挡关系优化.md",
        },
      ],
    },
  ],
  "/Web3D/Threejs/": [
    {
      text: "简介",
      items: [
        {
          text: "简介",
          link: "/Web3D/Threejs/index.md",
        },
      ],
    },
    {
      text: "记录",
      items: [
        {
          text: "参数建模",
          link: "/Web3D/Threejs/001.md",
        },
        {
          text: "stats",
          link: "/Web3D/Threejs/stats.md",
        },
      ],
    },
    {
      text: "点云标注(自动驾驶)",
      items: [
        {
          text: "Xtreme",
          link: "/Web3D/Threejs/xtreme1.md",
        },
      ],
    },
  ],
  "/Web3D/Universal/": [
    {
      text: "Universal",
      items: [
        {
          text: "常见问题",
          link: "/Web3D/Universal/index.md",
        },
      ],
    },
  ],

  /**
   * 编程语言
   * ├─ C++
   * ├─ Java
   * ├─ JavaScript
   * ├─ TypeScript
   * └─ Common
   */
  "/Lan/C++/": [
    {
      text: "C++",
      items: [
        {
          text: "简介",
          link: "/Lan/C++/index.md",
        },
        {
          text: "915",
          link: "/Lan/C++/915.md",
        },
        {
          text: "运算符",
          link: "/Lan/C++/运算符.md",
        },
        {
          text: "Vector",
          link: "/Lan/C++/vector.md",
        },
      ],
    },
  ],
  "/Lan/JavaScript/": [
    {
      text: "JavaScript",
      items: [
        {
          text: "简介",
          link: "/Lan/JavaScript/简介.md",
        },
        {
          text: "随笔",
          link: "/Lan/JavaScript/随笔.md",
        },
        {
          text: "Useful",
          link: "/Lan/JavaScript/index.md",
        },
        {
          text: "数组",
          link: "/Lan/JavaScript/数组.md",
        },
        {
          text: "类",
          link: "/Lan/JavaScript/类.md",
        },
        {
          text: "函数",
          link: "/Lan/JavaScript/函数.md",
        },
        {
          text: "正则表达式",
          link: "/Lan/JavaScript/正则表达式.md",
        },
        {
          text: "闭包",
          link: "/Lan/JavaScript/闭包.md",
        },
        {
          text: "作用域链",
          link: "/Lan/JavaScript/作用域链.md",
        },
        {
          text: "原型与原型链",
          link: "/Lan/JavaScript/原型与原型链.md",
        },
        {
          text: "继承",
          link: "/Lan/JavaScript/继承.md",
        },
        {
          text: "图形开发",
          link: "/Lan/JavaScript/threejs.md",
        },
      ],
    },
    {
      text: "面试题",
      items: [
        // {
        //   text: "面试题",
        //   link: "/Lan/JavaScript/面试题.md",
        // },
        {
          text: "代码执行顺序",
          link: "/Lan/JavaScript/代码执行顺序.md",
        },
      ],
    },
  ],

  "/Lan/TypeScript/": [
    {
      text: "TypeScript",
      items: [
        {
          text: "TS",
          link: "/Lan/TypeScript/index.md",
        },
        {
          text: "类型",
          link: "/Lan/TypeScript/类型.md",
        },
        {
          text: "泛型函数",
          link: "/Lan/TypeScript/泛型.md",
        },
      ],
    },
  ],
  "/Lan/common/": [
    {
      text: "common",
      items: [
        {
          text: "通用",
          link: "/Lan/common/index.md",
        },
      ],
    },
  ],

  /**
   * 计算机基础
   * ├─ 数据结构
   * ├─ 程序设计
   * ├─ 操作系统
   * └─ 计算机网络
   */
  "/Base/DataStructure/": [
    // basic concept 基础概念
    {
      text: "数据结构",
      items: [
        {
          text: "简介",
          link: "/Base/DataStructure/index.md",
        },
        {
          text: "数据结构基本概念",
          link: "/Base/DataStructure/001.md",
        },
        {
          text: "算法和算法分析",
          link: "/Base/DataStructure/002.md",
        },
        {
          text: "线性表",
          link: "/Base/DataStructure/线性表.md",
        },
        {
          text: "栈和队列",
          link: "/Base/DataStructure/栈和队列.md",
        },
        {
          text: "二叉树和森林",
          link: "/Base/DataStructure/二叉树和森林.md",
        },
        {
          text: "图",
          link: "/Base/DataStructure/图.md",
        },
        {
          text: "查找",
          link: "/Base/DataStructure/查找.md",
        },
        {
          text: "排序",
          link: "/Base/DataStructure/排序.md",
        },
        {
          text: "矩阵和串",
          link: "/Base/DataStructure/矩阵和串.md",
        },
      ],
    },
    // algorithm 常见算法
    {
      text: "常见算法",
      items: [
        {
          text: "Algorithm",
          link: "/Base/DataStructure/算法.md",
        },
      ],
    }
  ],
  "/Base/Programming/": [
    // First part
    {
      text: "程序设计",
      items: [
        {
          text: "简介",
          link: "/Base/Programming/index.md",
        },
        {
          text: "数组",
          link: "/Base/Programming/数组.md",
        },
        {
          text: "哈希表",
          link: "/Base/Programming/哈希表.md",
        },
        {
          text: "排序",
          link: "/Base/Programming/排序.md",
        },
        {
          text: "查找",
          link: "/Base/Programming/查找.md",
        },
        {
          text: "树",
          link: "/Base/Programming/查找.md",
        },
        {
          text: "查找",
          link: "/Base/Programming/查找.md",
        },
        {
          text: "动态规划",
          link: "/Base/Programming/动态规划.md",
        },
      ],
    },
  ],
  "/Base/OS/": [
    {
      text: "Linux",
      items: [
        {
          text: "简介",
          link: "/Base/OS/index.md",
        },
      ],
    },
  ],
  "/Base/Network/": [
    {
      text: "common",
      items: [
        {
          text: "简介",
          link: "/Base/Network/index.md",
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
  "/Front/Com/": [
    {
      text: "Web开发",
      items: [
        {
          text: "通用",
          link: "/Front/Com/index.md",
        },
        {
          text: "Http",
          link: "/Front/Com/http.md",
        },
        {
          text: "Node.js",
          link: "/Front/Com/nodejs.md",
        },
        {
          text: "常见问题",
          link: "/Front/Com/常见问题.md",
        },
      ],
    },
  ],
  "/Front/Vue3/": [
    {
      text: "简介",
      items: [
        {
          text: "Vue3简介",
          link: "/Front/Vue3/index.md",
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
  "/Front/React/": [
    {
      text: "简介",
      items: [
        {
          text: "React",
          link: "/Front/React/index.md",
        },
      ],
    },
    {
      text: "常用",
      items: [
        {
          text: "登录鉴权",
          link: "/Front/React/登录鉴权.md",
        },
        {
          text: "主题切换",
          link: "/Front/React/主题切换.md",
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
  "/Project/DesignSW/": [
    {
      text: "简介",
      items: [
        {
          text: "设计软件",
          link: "/Project/DesignSW/index.md",
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
