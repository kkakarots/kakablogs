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
<img src="./images/重心坐标1.png" style="margin: auto;">

$A,B,C$ 是坐标向量, 例A: (1, 2)
:::
:::info What’s the barycentric coordinate of $A$?
<img src="./images/重心坐标2.png" style="margin: auto;">
:::
:::info Geometric viewpoint — proportional areas (几何视点-比例面积)

<img src="./images/重心坐标3.png" style="margin: auto;">
:::
:::info What’s the barycentric coordinate of the centroid? (质心的重心坐标是什么?)

<img src="./images/重心坐标4.png" style="margin: auto;">
:::
:::tip Formulas

<img src="./images/重心坐标5.png" style="margin: auto;">
:::
:::tip Using Barycentric Coordinates
Linearly interpolate values at vertices (在顶点处线性插值)
<img src="./images/重心坐标6.png" style="margin: auto;">

**However, barycentric coordinates are not invariant under projection! (然而，质心坐标在投影下不是不变的!)**
:::

## Applying Textures

