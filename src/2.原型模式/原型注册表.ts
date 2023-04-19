interface Prototype2 {
  clone(): Prototype2
  property1?: number
  property2?: number
}

class PrototypeRegistry {
  private prototypes: { [key: string]: Prototype2 } = {}

  public getPrototype(name: string): Prototype2 {
    const prototype = this.prototypes[name]
    return prototype.clone()
  }

  public setPrototype(name: string, prototype: Prototype2) {
    this.prototypes[name] = prototype
  }
}

// 原型I
class ConcretePrototype1 {
  public property1 = 0

  public clone(): this {
    return Object.create(this)
  }
}

// 原型II
class ConcretePrototype2 {
  public property2 = 0

  public clone(): this {
    return Object.create(this)
  }
}

// 注册原型
const registry = new PrototypeRegistry()
registry.setPrototype('p1', new ConcretePrototype1())
registry.setPrototype('p2', new ConcretePrototype2())

// 获取对应的注册原型
const c1 = registry.getPrototype('p1')
const c2 = registry.getPrototype('p2')

// 修改原型属性
c1.property1 = 1
c2.property2 = 2

console.log(c1 instanceof ConcretePrototype1) // true
console.log(c2 instanceof ConcretePrototype2) // true

console.log(c1)
console.log(c2)
