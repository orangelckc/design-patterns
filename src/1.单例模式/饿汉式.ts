class Singleton2 {
  static instance = new Singleton2('Singleton2')
  name: string

  constructor(name: string) {
    this.name = name
  }

  static getInstance() {
    return this.instance
  }
}

const a2 = Singleton2.getInstance()
const b2 = Singleton2.getInstance()

console.log(a2 === b2) // true

console.log(a2.name) // Singleton2
console.log(b2.name) // Singleton2
