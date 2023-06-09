# 简单工厂模式

简单工厂模式专门定义一个类来负责创建其他类的实例，可以根据不同的参数返回不同类的实例，被创建的实例通常都具有共同的父类。

简单工厂模式用于创建某一大类产品（抽象类）的统一管理和封装，它使用`new`初始化某个产品，工厂方法返回的对象通常被称作 “产品”。

- [参考教程](https://refactoringguru.cn/design-patterns/factory-method)
- [视频讲解](https://www.bilibili.com/video/BV1Ta4y1Y7af/)

## 优点

- 工厂类包含必要的逻辑判断，可以决定在什么时候创建哪一个产品类的实例，客户端可以免除直接创建产品对象的职责，而仅仅“消费”产品。
- 客户端无需知道所创建具体产品的类名，只需要知道参数即可。
- 通过引入配置文件，可以在不修改任何客户端代码的情况下更换和添加新的具体产品类。

## 缺点

- 由于工厂类集中了所有产品的创建逻辑，一旦不能正常工作，整个系统都要受到影响。
- 使用简单工厂模式势必会增加系统中类的个数（引入了新的工厂类），增加了系统的复杂度和理解难度。
- 系统扩展困难，一旦添加新产品就不得不修改工厂逻辑，违背了“开闭原则”。
- 工厂方法的代码看上去可能非常糟糕。 其中可能会有复杂的 `switch` 分支运算符， 用于选择各种需要实例化的产品类。

## 适用场景

- 工厂类负责创建的对象比较少。
- 客户端只知道传入工厂类的参数，对于如何创建对象（逻辑）不关心。

## 代码实现

[code](./%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.ts)