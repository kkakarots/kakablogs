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

私有字段写法：`#value`

```js
class Color {
  // 声明：每个 Color 实例都有一个名为 #values 的私有字段。
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    this.#values[0] = value;
  }
}
```

## 合理使用箭头函数

- 在普通函数中，this 指向的是调用该函数的对象，也就是函数的执行上下文。而在箭头函数中，this 指向的是定义该箭头函数时所在的上下文，也就是箭头函数所在的函数或者全局对象。
  `经验：在回调函数中获取不到某数据时可以将回调函数写成箭头函数一试。`

- 普通函数可以用作构造函数来创建对象，而箭头函数不能用作构造函数。

## Promises 以及 async/await

`//Todo`

## 使用模板字符串

```js
//example
const text = "literal";
const foo = `this is a template ${text}`;
```

## 判断对象上是否有某属性

```js
if ("propertyName" in object) {
  // 对象上有 propertyName 属性
} else {
  // 对象上没有 propertyName 属性
}
```
