# 编码特性

## 使用`for(elem of collection)`

```js
//example
for (const [key, value] of Object.entries(someObject)) {
  console.log(key, value);
}
```

## 使用解构赋值

```js
//object
const dims = { width: 300, height: 150 };
//old code
const width = dims.width;
const height = dims.height;
//new code
const { width, height } = dims;
```

## 使用对象声明简写

```js
//old code
const width = 300;
const height = 150;
const obj = {
  width: width,
  height: height,
  area: function () {
    return this.width * this.height;
  },
};
//new code
const width = 300;
const height = 150;
const obj = {
  width,
  height,
  area() {
    return this.width * this.height;
  },
};
```

## 使用扩展运算符`...`

```js
//example
const position = [1, 2, 3];
somemesh.position.set(...position);
```

## 使用`class`

`//Todo`

## 合理使用箭头函数

`//Todo 箭头函数和普通函数的区别`

## Promises 以及 async/await

`//Todo`

## 使用模板字符串

```js
//example
const text = "literal";
const foo = `this is a template ${text}`;
```
