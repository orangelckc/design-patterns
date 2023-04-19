# 原型模式

创建型模式之一，通过克隆一个已有的对象来创建新的对象，而不是通过`new`来创建。

- [参考教程](https://refactoringguru.cn/design-patterns/prototype)
- [视频讲解](https://www.bilibili.com/video/BV1Tt4y1e7mk/)

## 1. 适用场景

- 类初始化消耗资源较多
- new产生一个对象需要非常繁琐的数据准备或访问权限
- 构造函数比较复杂
- 循环体中生产大量对象时

## 2. 优点

- 性能提高
- 避免构造函数的约束

## 3. 缺点

- 需要为每一个类都配置一个`clone`方法
- `clone`方法位于类的内部，当对已有的类进行改造时，需要修改代码，违背了开闭原则

## 4. clone方法

### 4.1. 浅拷贝

浅拷贝只是拷贝了对象的引用，而不是对象本身，所以当对象的成员变量是引用类型时，拷贝后的对象和原对象的成员变量指向同一个对象。

```ts
function shallowClone(obj: any) {
  const clone = Object.create(Object.getPrototypeOf(obj))
  const propNames = Object.getOwnPropertyNames(obj)

  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name)
    Object.defineProperty(clone, name, desc)
  })

  return clone
}
```

### 4.2. 深拷贝

深拷贝是将对象本身拷贝一份，而不是拷贝对象的引用，所以拷贝后的对象和原对象的成员变量指向不同的对象。

```ts
function deepClone(obj: any) {
  if (obj === null)
    return null
  if (obj instanceof Date)
    return new Date(obj)
  if (obj instanceof RegExp)
    return new RegExp(obj)
  if (typeof obj !== 'object')
    return obj

  const clone = new obj.constructor()

  for (const key in obj) {
    if (obj.hasOwnProperty(key))
      clone[key] = deepClone(obj[key])
  }

  return clone
}
```

### 4.3. Object.create

`Object.create` 是一个用于创建一个新对象的方法。

它的作用是创建一个新对象，该对象的原型指向传入的参数对象，从而实现原型继承。

```ts
const obj = {
  name: 'obj',
  child: {
    name: 'child'
  }
}

const obj2 = Object.create(obj)

obj2.name = 'obj2'
obj2.child.name = 'child2'
```

## 5. 代码实现

[code](./%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F.ts)

## 6. 原型注册表

[code](./%E5%8E%9F%E5%9E%8B%E6%B3%A8%E5%86%8C%E8%A1%A8.ts)

可以创建一个中心化的原型注册表， 用于存储常用原型。

新建一个工厂类来实现注册表， 获取原型方法必须能够根据客户端请求的条件进行搜索。找到合适的原型后， 注册表应对原型进行克隆， 并将复制生成的对象返回给客户端。