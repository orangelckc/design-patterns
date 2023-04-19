class Singleton1 {
  name: string
  static instance: any

  constructor(name: string) {
    this.name = name
  }

  static getInstance(name: string) {
    if (!this.instance)
      this.instance = new Singleton1(name)

    return this.instance
  }
}

const a1 = Singleton1.getInstance('SingletonA')
const b1 = Singleton1.getInstance('SingletonB')

console.log(a1 === b1) // true

console.log(a1.name) // SingletonA
console.log(b1.name) // SingletonA
