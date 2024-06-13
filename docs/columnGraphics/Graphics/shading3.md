# Shading

:::tip 这节课

- Barycentric coordinates (重心坐标)
- Texture queries (纹理查询)
- Applications of textures (应用)
  :::

## Interpolation Across Triangles: Barycentric Coordinates (重心坐标)

### Interpolation Across Triangles

Why do we want to interpolate?

- Specify values at vertices (指定值 在顶点)
- Obtain smoothly varying values across triangles (获得平滑变化的值 在三角形)

What do we want to interpolate?

- Texture coordinates, colors, normal vectors, … (纹理坐标，颜色，法向量，…)

How do we interpolate?

- **Barycentric coordinates**

### Barycentric Coordinates

::: info A coordinate system for triangles $(\alpha, \beta, \gamma)$
**What’s the barycentric coordinate of $A$?**

<div style="display:flex">
    <img src="./images/重心坐标1.png" style="margin: 2px auto; max-width: 48%;">
    <img src="./images/重心坐标2.png" style="margin: 2px auto; max-width: 48%;">
</div>
$A,B,C$ 是坐标向量, 例A: (1, 2)
:::

:::info Geometric viewpoint — proportional areas (几何视点-比例面积)
**What’s the barycentric coordinate of the centroid? (质心的重心坐标是什么?)**

<div style="display:flex">
    <img src="./images/重心坐标3.png" style="margin: 2px auto; max-width: 48%;">
    <img src="./images/重心坐标4.png" style="margin: 2px auto; max-width: 48%;">
</div>
:::

:::tip Formulas

<img src="./images/重心坐标5.png" style="margin: auto; max-width: 60%;">
:::
:::tip Using Barycentric Coordinates
Linearly interpolate values at vertices (在顶点处线性插值)
<img src="./images/重心坐标6.png" style="margin: auto; max-width: 60%;">

**However, barycentric coordinates are not invariant under projection! (然而，质心坐标在投影下不是不变的!)**
:::

## Applying Textures

### Simple Texture Mapping: Diffuse Color (简单纹理映射:漫反射颜色)

:::info for each rasterized screen sample (x,y): -> Usually a pixel's center

- (u,v) = evaluate texture coordinate at (x,y) -> Using barycentric coordinates!

- texcolor = texture.sample (u, v);

- set sample’s color to texcolor; -> Usually the diffuse albedo Kd(recall the Blinn-Phong reﬂectance model)

:::

### Texture Magnification (What if the texture is too small?)

#### Easy Case

Generally don’t want this — insufficient texture resolution

A pixel on a texture — a texel(纹理元素、纹素)

<div style="display:flex">
    <img src="./images/纹理放大1.png" style="margin: 2px auto; max-width: 30%;">
    <img src="./images/纹理放大2.png" style="margin: 2px auto; max-width: 30%;">
    <img src="./images/纹理放大3.png" style="margin: 2px auto; max-width: 30%;">
</div>
<div style="display:flex">
    <font color="#606266" style="margin: 2px auto;">Nearest</font>
    <font color="#606266" style="margin: 2px auto;">Bilinear</font>
    <font color="#606266" style="margin: 2px auto;">Bicubic</font>
</div>

:::info Bilinear Interpolation (双线性插值)

<img src="./images/双线性插值1.png" style="margin: 2px auto; max-width: 30%;">

Want to sample texture value f(x,y) at red point (想要取样吗? 纹理值f(x,y)在红点)

Black points indicate texture sample locations (黑点表示纹理样本的位置)

<img src="./images/双线性插值2.png" style="margin: 2px auto; max-width: 30%;">

Take 4 nearest sample locations, with texture values as labeled. (取4个最近的样本位置，标记纹理值)
<div style="display:flex">
    <img src="./images/双线性插值3.png" style="margin: 2px auto; max-width: 30%;">
    <img src="./images/双线性插值4.png" style="margin: 2px auto; max-width: 30%;">
    <img src="./images/双线性插值5.png" style="margin: 2px auto; max-width: 30%;">
</div>

*And fractional offsets, (s,t) as shown (分数偏移量， (s,t)如图所示)*

**Linear interpolation (1D)**

$lerp(x, v_0, v_1) = v_0 + x(v_1 - v_0)$

**Two helper lerps (horizontal)**

$u_0 = lerp(s, u_{00}, u_{10})$

$u_1 = lerp(s, u_{01}, u_{11})$

**Final vertical lerp, to get result:**

$f(x, y) = lerp(t, u_0, u_1)$

**Bilinear interpolation usually gives pretty good results at reasonable costs (双线性插值通常以合理的成本给出相当好的结果)**
:::

### Texture Magnification (What if the texture is too large?)

#### Hard Case

Point Sampling Textures — Problem (点采样纹理-问题)

<img src="./images/点采样纹理1.png" style="margin: 2px auto; max-width: 80%;">

Screen Pixel “Footprint” in Texture (纹理中的屏幕像素“足迹”)
<img src="./images/点采样纹理2.png" style="margin: 2px auto; max-width: 80%;">

Will Supersampling Do Antialiasing? (超采样会做抗锯齿吗?)
<img src="./images/点采样纹理3.png" style="margin: 2px auto; max-width: 80%;">


