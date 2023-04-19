// 抽象工厂接口，定义了创建产品的方法
interface IFactory {
  createProduct(): IProduct
}

// 抽象产品接口，定义了产品的公共方法
interface IProduct {
  operation(): string
}

// 具体产品C
class ConcreteProductC implements IProduct {
  operation(): string {
    return '生产产品C'
  }
}

// 具体产品D
class ConcreteProductD implements IProduct {
  operation(): string {
    return '生产产品D'
  }
}

// 具体工厂C，实现了抽象工厂接口，用于创建具体产品C
class ConcreteFactoryC implements IFactory {
  createProduct(): IProduct {
    return new ConcreteProductC()
  }
}

// 具体工厂D，实现了抽象工厂接口，用于创建具体产品D
class ConcreteFactoryD implements IFactory {
  createProduct(): IProduct {
    return new ConcreteProductD()
  }
}

// 客户端代码，需要使用工厂创建产品
function clientCode(factory: IFactory) {
  const product = factory.createProduct()
  console.log(product.operation())
}

// C工厂生产C产品
clientCode(new ConcreteFactoryC())

// D工厂生产D产品
clientCode(new ConcreteFactoryD())
