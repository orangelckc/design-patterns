/**
 * 代理实现单例模式
 * @param className 类定义
 */
function singletonProxy(className: any) {
  let instance: any = null
  return new Proxy(className, {
    // construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作
    construct(target, args) {
      class ProxyClass {
        constructor() {
          if (!instance)
            // eslint-disable-next-line new-cap
            instance = new target(...args)

          return instance
        }
      }
      return new ProxyClass()
    },
  })
}

class A {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

const AP = singletonProxy(A)
const a3 = new AP('ProxyA')
const b3 = new AP('ProxyB')

console.log(a3 === b3) // true

console.log(a3.name) // ProxyA
console.log(b3.name) // ProxyA
