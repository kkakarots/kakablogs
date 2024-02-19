---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Kaka Blogs"
  text: " "
  tagline: " "
  image:
    light: /Imgs/logo-light.svg
    dark: /Imgs/logo-dark.svg
    alt: VitePress
  actions:
    - theme: brand
      text: 快速开始
      link: /columnGraphics/Graphics/
    - theme: alt
      text: Web3D示例
      link: /columnGraphics/WebGPU/
    - theme: alt
      text: Github
      link: https://github.com/

features:
  - icon: 🛠️
    title: 图形学
    details: 数学基础 / 规范 / 图形API / 图形引擎
  - icon: 🌏
    title: Web3D
    details: WebGPU / WebGL / Cesium / Threejs
  - icon: 🏔️
    title: 软件工程
    details: 前端 / 后端 / 数据库 / CICD / 三维可视化应用
---

<!-- 自定义组件 -->
<script setup>
  import home from './components/home.vue'
</script>


<home />
