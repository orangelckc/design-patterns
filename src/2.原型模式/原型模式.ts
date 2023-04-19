interface Prototype {
  clone(): Prototype
}

class ConcretePrototype implements Prototype {
  private name: string
  private age: number
  private hobbies: string[]

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name
    this.age = age
    this.hobbies = hobbies
  }

  clone(): Prototype {
    // return Object.create(this)
    return new ConcretePrototype(this.name, this.age, this.hobbies)
  }
}

const prototype = new ConcretePrototype('dht', 18, ['coding'])

const clone = prototype.clone()

console.log(prototype)
console.log(clone)

console.log(clone === prototype) // false
