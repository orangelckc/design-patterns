// 抽象按钮接口：抽象产品
interface IButton {
  display(): void
}

// Spring按钮类：具体产品
class SpringButton implements IButton {
  display() {
    console.log('显示浅绿色按钮。')
  }
}

// Summer按钮类：具体产品
class SummerButton implements IButton {
  display() {
    console.log('显示浅蓝色按钮。')
  }
}

// 抽象文本框接口：抽象产品
interface ITextField {
  display(): void
}

// Spring文本框类：具体产品
class SpringTextField implements ITextField {
  display() {
    console.log('显示绿色边框文本框。')
  }
}

// Summer文本框类：具体产品
class SummerTextField implements ITextField {
  display() {
    console.log('显示蓝色边框文本框。')
  }
}

// 抽象组合框接口：抽象产品
interface IComboBox {
  display(): void
}

// Spring组合框类：具体产品
class SpringComboBox implements IComboBox {
  display() {
    console.log('显示绿色边框组合框。')
  }
}

// Summer组合框类：具体产品
class SummerComboBox implements IComboBox {
  display() {
    console.log('显示蓝色边框组合框。')
  }
}

// 抽象工厂接口：抽象工厂
// 用于创建按钮、文本框、组合框的产品族
interface IThemeFactory {
  createButton(): IButton
  createTextField(): ITextField
  createComboBox(): IComboBox
}

// Spring皮肤工厂：具体工厂
// 用于创建 Spring 按钮、文本框、组合框
class SpringThemeFactory implements IThemeFactory {
  createButton() {
    return new SpringButton()
  }

  createTextField() {
    return new SpringTextField()
  }

  createComboBox() {
    return new SpringComboBox()
  }
}

// Summer皮肤工厂：具体工厂
// 用于创建 Summer 按钮、文本框、组合框
class SummerThemeFactory implements IThemeFactory {
  createButton() {
    return new SummerButton()
  }

  createTextField() {
    return new SummerTextField()
  }

  createComboBox() {
    return new SummerComboBox()
  }
}

// 客户端代码
// 通过抽象工厂接口操作产品对象
class Client {
  private button: IButton
  private textField: ITextField
  private comboBox: IComboBox

  constructor(themeFactory: IThemeFactory) {
    this.button = themeFactory.createButton()
    this.textField = themeFactory.createTextField()
    this.comboBox = themeFactory.createComboBox()
  }

  display() {
    this.button.display()
    this.textField.display()
    this.comboBox.display()
  }
}

const springThemeFactory = new SpringThemeFactory()
const summerThemeFactory = new SummerThemeFactory()

// 创建客户端，使用Spring皮肤工厂
const springClient = new Client(springThemeFactory)
springClient.display()

// 创建客户端，使用Summer皮肤工厂
const summerClient = new Client(summerThemeFactory)
summerClient.display()
