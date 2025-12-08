## stats

> 实时监控渲染负载

### 1. **FPS（Frames Per Second）**

* **来源**：`frames / 秒`（统计周期内渲染的帧数）
* **含义**：每秒渲染的画面帧数，反映渲染性能和流畅度。FPS 越高，画面越流畅；FPS 越低，画面越卡顿。
* **常见原因**：

  * 场景物体、光源、后期特效过多，渲染负载过大
  * CPU 或 GPU 性能不足
  * JavaScript 主线程被其他任务阻塞
  * 内存不足导致频繁垃圾回收（GC）
* **优化目标**：

  * 保持稳定 60 FPS（刷新率为 60Hz 显示器）或更高
  * 对低性能设备，确保至少 30 FPS
* **优化方法**：

  * 减少 Draw Call 数量（合并网格、实例化渲染）
  * 降低模型面数（减少 triangles）
  * 降低纹理分辨率或使用压缩纹理格式
  * 优化着色器复杂度
  * 使用视锥剔除（Frustum Culling）、遮挡剔除（Occlusion Culling）


### 2. **draws（Draw Calls）**

* **来源**：`renderer.gl.info.render.calls`
* **含义**：本帧执行的 GPU Draw Call 数量，每次 GPU 绘制一次几何体就是一个 Draw Call。
* **常见原因**：

  * 场景中对象数量多
  * 没有合批（batching）或实例化（instancing）
* **优化目标**：降低 Draw Call 数量以减少 CPU→GPU 通信开销
* **优化方法**：

  * 合并几何体
  * 使用实例化渲染（InstancedMesh）
  * 使用纹理图集（Texture Atlas）


### 3. **tris（Triangles）**

* **来源**：`renderer.gl.info.render.triangles`
* **含义**：GPU 在本帧渲染的三角形数量，决定渲染负载大小。
* **常见原因**：

  * 模型面数高（高多边形模型）
  * 相机视野内包含大量几何体
* **优化目标**：降低三角形数量，减轻 GPU 负载
* **优化方法**：

  * 减少模型多边形数量
  * 使用 LOD（Level of Detail）
  * 剔除不可见物体（Frustum Culling / Occlusion Culling）


### 4. **textures（Textures）**

* **来源**：`renderer.gl.info.memory.textures`
* **含义**：当前 GPU 内存中加载的纹理数量，占用显存。
* **常见原因**：

  * 使用了大量贴图（颜色贴图、法线贴图、环境贴图等）
  * 没有及时释放不再使用的纹理
* **优化目标**：控制 GPU 内存占用，防止显存溢出
* **优化方法**：

  * 合并纹理 / 使用纹理图集（Texture Atlas）
  * 删除未使用的材质和纹理对象（`texture.dispose()`）
  * 使用压缩纹理格式（如 DDS、KTX2）


### 5. **geometries（Geometries）**

* **来源**：`renderer.gl.info.memory.geometries`
* **含义**：当前 GPU 内存中存在的几何体（Geometry/BufferGeometry）数量。
* **常见原因**：

  * 场景中加载了大量模型
  * 没有释放不再使用的几何体
* **优化目标**：控制 GPU 内存占用，复用几何体实例
* **优化方法**：

  * 复用几何体实例（多个 Mesh 使用同一个 BufferGeometry）
  * `geometry.dispose()` 释放不再使用的几何数据

---

💡 **简单来说：**

* `fps` → 每秒显示的帧数（Frame Per Second），衡量渲染流畅度。
* `draws` → CPU 到 GPU 的调用次数（通信开销）。
* `tris` → GPU 渲染的多边形数量（渲染负载）。
* `textures` → 占用显存的纹理数量。
* `geometries` → 占用显存的几何体数量。

## Summary

<img src="./images/stats.png" alt="stats.png" title="stats" style="margin: 0 auto;">
