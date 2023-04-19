interface Product {
  use(): void
}

class ConcreteProductA implements Product {
  use(): void {
    console.log('使用产品A')
  }
}

class ConcreteProductB implements Product {
  use(): void {
    console.log('使用产品B')
  }
}

class Factory {
  static createProduct(type: string): Product {
    switch (type) {
      case 'A':
        return new ConcreteProductA()
      case 'B':
        return new ConcreteProductB()
      default:
        throw new Error('没有该产品')
    }
  }
}

const productA = Factory.createProduct('A')
productA.use()

const productB = Factory.createProduct('B')
productB.use()

const productC = Factory.createProduct('C')
productC.use()
