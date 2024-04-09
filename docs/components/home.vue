<template>
    <!-- <div class="home-wrapper">
        <div v-for="item in list" :key="item" class="home-item">{{ item }}</div>
    </div> -->
    <div id="threejs" class="threejs-container">
        <div class="legend_box">
            <div class="infomations">
                <p style="font-weight: bolder;">天空盒</p>
            </div>
        </div>
        <!-- <div class="button_">
            <el-button type="primary" round @click="changeIndex">点击切换</el-button>
        </div> -->
    </div>
</template>
  
<script lang="js" setup>
import * as THREE from 'three';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { defineComponent, onMounted, ref, reactive, toRaw } from "vue";
const list = ['地址：陕西省西安市', '邮箱：kakarots@foxmail.com', 'QQ：35688351', '微信：nokkbb'];
/*** 场景***/

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor("rgb(245, 247, 250)");

/***  光照 ***/

// 环境光
const ambientLight = new THREE.AmbientLight("#ffffff", 0.8);

// 点光
const pointLight = new THREE.PointLight("#ffffff", 0.5, 600, 0.2);
pointLight.position.set(0, 100, 200);

scene.add(ambientLight, pointLight);

/*** 相机 ***/

let camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
);

camera.position.set(500, 0, 50);
camera.lookAt(new THREE.Vector3(0, 0, 0));
// camera.up = new THREE.Vector3(0, 1, 0);

/*** WebGL渲染器 scene, camera在此处渲染 ***/

// renderer.setSize(window.innerWidth - 280, window.innerHeight - 100);
renderer.setSize(500, 200);
renderer.render(scene, camera);

/*** 模型 ***/

// 辅助线网格线本质上也是模型
const axesHelper = new THREE.AxesHelper(500);
const gridHelper = new THREE.GridHelper(100, 10, "#B5B5B5", "#B5B5B5");
// scene.add(axesHelper, gridHelper);
scene.add(gridHelper);

// 轨道控制器
// let orbitControls = new OrbitControls(camera, renderer.domElement);
// orbitControls.mouseButtons = {
//     // LEFT: THREE.MOUSE.ROTATE, //
//     LEFT: null, // 左键无功能
//     MIDDLE: THREE.MOUSE.DOLLY, // 中键缩放
//     // RIGHT: THREE.MOUSE.PAN,
//     RIGHT: THREE.MOUSE.ROTATE, // 右键旋转
// };

// 天空盒 ***********************************************************************************************

let pathArr = [
    "/Imgs/tex/texFirst/",
    "/Imgs/tex/texSecond/",
    "/Imgs/tex/texThird/",
    "/Imgs/tex/texFourth/"
]

let directions = ["posx", "negx", "posy", "negy", "posz", "negz"];

let format = ".jpg";

let i = -1;

// 一开始加载在mounted里调用了一次，所有此处设置索引为-1，而后通过点击按钮更改索引信息
const changeIndex = () => {
    if (i < pathArr.length - 1) {
        i++;
    } else {
        i = 0;
    }

    let urls = [
        pathArr[i] + directions[0] + format,
        pathArr[i] + directions[1] + format,
        pathArr[i] + directions[2] + format,
        pathArr[i] + directions[3] + format,
        pathArr[i] + directions[4] + format,
        pathArr[i] + directions[5] + format,
    ]

    let textureCube = new THREE.CubeTextureLoader().load(urls);
    scene.background = textureCube;
}




/**
 *   以下方式暂存问题
 */
// let skyGeometry = new THREE.BoxGeometry(5000, 5000, 5000);
// let materialArray = [];
// for (let i = 0; i < 6; i++) {
//     materialArray.push( new THREE.MeshBasicMaterial({
//         map: THREE.ImageUtils.loadTexture( path + directions[i]+ format),
//         side: THREE.BackSide
//     }));
// }
// let skyMaterial = new THREE.MeshBasicMaterial(materialArray);
// let skyBox = new THREE.Mesh(skyGeometry,skyMaterial);
// scene.add(skyBox);
let animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera); // 渲染器渲染场景和相机
};


onMounted(async () => {
    document.getElementById("threejs")?.appendChild(renderer.domElement);
    animate();
    changeIndex();
});

</script>
  
<style scoped lang="less">
.home-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.home-item {
    vertical-align: middle;
    margin: 4px 4px 10px;
    padding: 20px 20px;
    font-weight: bolder;
    display: inline-block;
    border-radius: 2px;
    line-height: 13px;
    font-size: 13px;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
}

.threejs-container {
    width: 500px;
    /* height: 735px; */
    height: 300px;
    display: flex;
    margin: 40px auto;
    position: relative;

    /* background-color: burlywood; */
    .legend_box {
        width: 10%;
        position: absolute;
        left: 20px;
        top: 20px;
        z-index: 10001;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        font-size: 15px;
        color: rgb(255, 255, 255);
    }
}

.button_ {
    width: 8%;
    position: absolute;
    left: 90%;
    top: 20px;
    z-index: 10001;
    background: rgba(1, 183, 255, 0.0);
    border-radius: 15px;
    font-size: 15px;
    color: rgb(255, 255, 255);
}

.button_in {
    background: rgba(1, 183, 255, 0.4);
    border-radius: 15px;
    font-size: 15px;
    color: rgb(0, 0, 0);
}



.infomations {
    margin: 5%;
    font-family: "黑体";
    text-align: left;
}
</style>
  