# Web开发通用

## NPM

::: tip 淘宝镜像

//设置镜像

npm config set registry https://registry.npmmirror.com

//获取当前

npm config get registry

:::
## NVM

::: tip 下载后设置

```
// ../settings
node_mirror: https://cdn.npmmirror.com/binaries/node/
npm_mirror: https://cdn.npmmirror.com/binaries/npm/
```
:::
## Git

::: tip 用户设置

``` cmd
git config user.name
git config user.email
```
:::

## 注释
**编码习惯**
``` js
@ 文档注释
/**
 * @description    函数说明
 * @param          参数说明
 * @returns        返回函数执行结果
 * @version        版本
 * @author         作者
 * @deprecated     指示一个函数已经废弃，而且在将来的代码版本中将彻底删除，尽量避免使用这段代码
 */

@ 功能块注释
/* 功能名称---------------------------------------------------------------------------------------------------------------> */
--- code ---
/* <-------------------------------------------------------------------------------------------------------------- 功能名称 */

@ 行注释
//注释内容
--- code ---

--- code --- //注释内容
```


## CICD

::: info Todo
`CICD`
持续集成（CI）：通常指的是在开发期间持续集成代码的过程。

`Jenkins`
:::
