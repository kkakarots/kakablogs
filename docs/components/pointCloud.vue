<template>
    <!-- <div class="home-wrapper">
        <div v-for="item in list" :key="item" class="home-item">{{ item }}</div>
    </div> -->
    <div id="threejs-1" class="threejs-container">
        <div class="legend_box">
            <div class="infomations">
                <p style="font-weight: bolder;">- -</p>
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
import { defineComponent, onMounted, onUnmounted, ref, reactive, toRaw } from "vue";
const list = ['地址：陕西省西安市', '邮箱：kakarots@foxmail.com', 'QQ：35688351', '微信：nokkbb'];
/*** 场景***/

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
// renderer.setClearColor("rgb(245, 247, 250)");
renderer.setClearColor("rgb(0, 0, 0)");

/*** 相机 ***/

let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(500, 0, -500);
camera.lookAt(new THREE.Vector3(0, 0, 0));
camera.up = new THREE.Vector3(0, 1, 0);

/*** WebGL渲染器 scene, camera在此处渲染 ***/

renderer.setSize(500, 200);
renderer.render(scene, camera);

// 辅助线网格线本质上也是模型
const axesHelper = new THREE.AxesHelper(500);
const gridHelper = new THREE.GridHelper(100, 10, "#B5B5B5", "#B5B5B5");
scene.add(axesHelper, gridHelper);
// 轨道控制器
// let orbitControls = new OrbitControls(camera, renderer.domElement);
// orbitControls.mouseButtons = {
//     // LEFT: THREE.MOUSE.ROTATE, //
//     LEFT: THREE.MOUSE.PAN, // 左键无功能
//     // MIDDLE: THREE.MOUSE.PAN, // 中键缩放
//     // RIGHT: THREE.MOUSE.PAN,
//     RIGHT: THREE.MOUSE.ROTATE, // 右键旋转
// };

//  点云中的点坐标数组
const vertices = [];

for (let i = 0; i < 10000; i++) {
    const x = THREE.MathUtils.randFloatSpread(2000);
    const y = THREE.MathUtils.randFloatSpread(2000);
    const z = THREE.MathUtils.randFloatSpread(2000);
    // const x = 0;
    // const y = THREE.MathUtils.randFloatSpread(2000);
    // const z = THREE.MathUtils.randFloatSpread(2000);

    vertices.push(x, y, z);
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({ color: 0x888888 });

const points = new THREE.Points(geometry, material);

scene.add(points);

/*** 点云测试 ***/

let animate = () => {
    if (camera.position.x > 2000) {
        camera.position.x = 500;
    } else {
        camera.position.x += 0.05;
    }
    requestAnimationFrame(animate);
    renderer.render(scene, camera); // 渲染器渲染场景和相机
};

onMounted(async () => {
    document.getElementById("threejs-1")?.appendChild(renderer.domElement);
    animate();
});
onUnmounted(() => {
    // 移除renderer.domElement
    const domElement = renderer.domElement;
    domElement.parentNode.removeChild(domElement);
})

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
    height: 200px;
    display: flex;
    margin: 40px auto;
    position: relative;

    /* background-color: burlywood; */
    .legend_box {
        width: 12%;
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