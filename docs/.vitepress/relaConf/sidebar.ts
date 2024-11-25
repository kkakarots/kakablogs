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
        {
          text: "渲染管线",
          link: "/columnGraphics/Graphics/渲染管线.md",
        }
      ],
    },
    // Second part
    {
      text: "内容",
      items: [
        {
          text: "基础",
          link: "/columnGraphics/Graphics/001.md",
        },
        {
          text: "变换(Transformation)",
          link: "/columnGraphics/Graphics/002.md",
        },
        {
          text: "变换(Transformation Cont)",
          link: "/columnGraphics/Graphics/003.md",
        },
        {
          text: "光栅化(Rasterization)",
          link: "/columnGraphics/Graphics/004.md",
        },
        {
          text: "光栅化(Rasterization Cont)",
          link: "/columnGraphics/Graphics/005.md",
        },
        {
          text: "着色(Shading 1)",
          link: "/columnGraphics/Graphics/shading1.md",
        },
        {
          text: "着色(Shading 2)",
          link: "/columnGraphics/Graphics/shading2.md",
        },
        {
          text: "着色(Shading 3)",
          link: "/columnGraphics/Graphics/shading3.md",
        },
        {
          text: "几何(Geometry 1)",
          link: "/columnGraphics/Graphics/geometry1.md",
        },
        {
          text: "几何(Geometry 2)",
          link: "/columnGraphics/Graphics/geometry2.md",
        },
        {
          text: "几何(Geometry 3)",
          link: "/columnGraphics/Graphics/geometry3.md",
        },
        {
          text: "阴影贴图(Shadow mapping)",
          link: "/columnGraphics/Graphics/阴影贴图.md",
        },
        {
          text: "光线追踪(Ray Tracing 1)",
          link: "/columnGraphics/Graphics/raytracing1.md",
        },
        {
          text: "光线追踪(Ray Tracing 2)",
          link: "/columnGraphics/Graphics/raytracing2.md",
        },
        {
          text: "光线追踪(Ray Tracing 3)",
          link: "/columnGraphics/Graphics/raytracing3.md",
        },
        {
          text: "光线追踪(Ray Tracing 4)",
          link: "/columnGraphics/Graphics/raytracing4.md",
        },
        {
          text: "材质及外观(Materials and Appearances)",
          link: "/columnGraphics/Graphics/manda.md",
        },
        {
          text: "渲染中的高级主题(Advanced topics in rendering)",
          link: "/columnGraphics/Graphics/advancedtopics.md",
        },
        {
          text: "摄像机、镜头和光场(Cameras, Lenses and Light Fields)",
          link: "/columnGraphics/Graphics/cllf.md",
        },
        {
          text: "色彩与感知(Color and Perception)",
          link: "/columnGraphics/Graphics/cap.md",
        },
        {
          text: "动画(Animation)",
          link: "/columnGraphics/Graphics/animation.md",
        },
        {
          text: "动画(Animation Cont)",
          link: "/columnGraphics/Graphics/animationc.md",
        },
      ],
    },
  ],
  "/columnGraphics/Shader/": [
    // First part
    {
      text: "简介",
      items: [
        {
          text: "着色器简介",
          link: "/columnGraphics/Shader/index.md",
        }
      ],
    },
    // Second part
    {
      text: "内容",
      items: [
        {
          text: "基础",
          link: "/columnGraphics/Shader/index.md",
        }
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
          link: "/columnGraphics/WebGL/index.md",
        },
      ],
    },
    // Second part
    {
      text: "基础概念",
      items: [
        {
          text: "基础概念",
          link: "/columnGraphics/WebGL/基础概念/基础概念.md",
        },
        {
          text: "工作原理",
          link: "/columnGraphics/WebGL/基础概念/工作原理.md",
        },
        {
          text: "着色器和GLSL",
          link: "/columnGraphics/WebGL/基础概念/着色器和GLSL.md",
        },
        {
          text: "State Diagram",
          link: "/columnGraphics/WebGL/基础概念/StateDiagram.md",
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
        {
          text: "常见问题",
          link: "/columnWeb3D/Cesium/gis.md",
        },
      ],
    },
    {
      text: "源码解析",
      items: [
        {
          text: "源码解析-上",
          link: "/columnWeb3D/Cesium/源码解析-上.md",
        },
        {
          text: "源码解析-下",
          link: "/columnWeb3D/Cesium/源码解析-下.md",
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
        {
          text: "实体与地球遮挡关系优化",
          link: "/columnWeb3D/Cesium/实体与地球遮挡关系优化.md",
        },
      ],
    },
  ],
  "/columnWeb3D/Threejs/": [
    {
      text: "简介",
      items: [
        {
          text: "简介",
          link: "/columnWeb3D/Threejs/index.md",
        },
      ],
    },
    {
      text: "记录",
      items: [
        {
          text: "参数建模",
          link: "/columnWeb3D/Threejs/001.md",
        },
      ],
    },
  ],
  "/columnWeb3D/Universal/": [
    {
      text: "Universal",
      items: [
        {
          text: "常见问题",
          link: "/columnWeb3D/Universal/index.md",
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
   "/columnLan/C++/": [
    {
      text: "C++",
      items: [
        {
          text: "简介",
          link: "/columnLan/C++/index.md",
        },
        {
          text: "运算符",
          link: "/columnLan/C++/运算符.md",
        },
        {
          text: "Vector",
          link: "/columnLan/C++/vector.md",
        },
      ],
    },
  ],
  "/columnLan/JavaScript/": [
    {
      text: "JavaScript",
      items: [
        {
          text: "简介",
          link: "/columnLan/JavaScript/简介.md",
        },
        {
          text: "随笔",
          link: "/columnLan/JavaScript/随笔.md",
        },
        {
          text: "Useful",
          link: "/columnLan/JavaScript/index.md",
        },
        {
          text: "数组",
          link: "/columnLan/JavaScript/数组.md",
        },
        {
          text: "函数",
          link: "/columnLan/JavaScript/函数.md",
        },
        {
          text: "正则表达式",
          link: "/columnLan/JavaScript/正则表达式.md",
        },
        {
          text: "闭包",
          link: "/columnLan/JavaScript/闭包.md",
        },
        {
          text: "作用域链",
          link: "/columnLan/JavaScript/作用域链.md",
        },
        {
          text: "原型与原型链",
          link: "/columnLan/JavaScript/原型与原型链.md",
        },
        {
          text: "继承",
          link: "/columnLan/JavaScript/继承.md",
        },
      ],
    },
    {
      text: "面试题",
      items: [
        {
          text: "面试题",
          link: "/columnLan/JavaScript/面试题.md",
        },
      ]
    }
  ],

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
          text: "数据结构基本概念",
          link: "/columnBase/DataStructure/001.md",
        },
        {
          text: "算法和算法分析",
          link: "/columnBase/DataStructure/002.md",
        },
        {
          text: "线性表",
          link: "/columnBase/DataStructure/线性表.md",
        },
        {
          text: "栈和队列",
          link: "/columnBase/DataStructure/栈和队列.md",
        },
        {
          text: "二叉树和森林",
          link: "/columnBase/DataStructure/二叉树和森林.md",
        },
        {
          text: "图",
          link: "/columnBase/DataStructure/图.md",
        },
        {
          text: "查找",
          link: "/columnBase/DataStructure/查找.md",
        },
        {
          text: "排序",
          link: "/columnBase/DataStructure/排序.md",
        },
        {
          text: "矩阵和串",
          link: "/columnBase/DataStructure/矩阵和串.md",
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
        {
          text: "数组",
          link: "/columnBase/Programming/数组.md",
        },
        {
          text: "哈希表",
          link: "/columnBase/Programming/哈希表.md",
        },
        {
          text: "排序",
          link: "/columnBase/Programming/排序.md",
        },
        {
          text: "查找",
          link: "/columnBase/Programming/查找.md",
        },
        {
          text: "树",
          link: "/columnBase/Programming/查找.md",
        },
        {
          text: "查找",
          link: "/columnBase/Programming/查找.md",
        },
        {
          text: "动态规划",
          link: "/columnBase/Programming/动态规划.md",
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
      text: "Web开发",
      items: [
        {
          text: "通用",
          link: "/columnFront/Com/index.md",
        },
        {
          text: "Http",
          link: "/columnFront/Com/http.md",
        },
        {
          text: "Node.js",
          link: "/columnFront/Com/nodejs.md",
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
  "/columnFront/React/": [
    {
      text: "简介",
      items: [
        {
          text: "React",
          link: "/columnFront/React/index.md",
        },
      ],
    },
    {
      text: "常用",
      items: [
        {
          text: "登录鉴权",
          link: "/columnFront/React/登录鉴权.md",
        },
        {
          text: "主题切换",
          link: "/columnFront/React/主题切换.md",
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
