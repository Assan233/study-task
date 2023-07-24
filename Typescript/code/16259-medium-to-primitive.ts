/**
 * 实现：
 * 1.这里主要是值的处理，先判断函数，因为函数也是对象，其次判断对象，如果是对象，递归做ToPrimitive类型计算就好了
 * 2.基本数据类型的处理）：T extends { valueOf: () => infer P } ? P : T
 * 如果 T 是一个包装对象类型，如 Number 或 String 类型，它会具有一个 valueOf 方法返回对应的原始类型。通过条件类型判断 T 是否具有 valueOf 方法，
 * 如果有则返回它的返回值的类型 P。如果 T 已经是一个原始类型，这个条件类型直接返回原始类型 T。
 */
type ToPrimitive<T extends Record<string, any>> = {
    [K in keyof T]:
    T[K] extends Function ?
    Function :
    T[K] extends object ?
    ToPrimitive<T[K]> :
    T[K] extends { valueOf: () => infer P } ? P : T[K]
}


/* Question：
将类型为字面类型（标签类型）的属性，转换为基本类型。 */

type _PersonInfo = {
    name: 'Tom',
    age: 30,
    married: false,
    addr: {
        home: '123456',
        phone: '13111111111'
    }
}
type Expected = ToPrimitive<_PersonInfo>

/* 要求结果如下：
type PersonInfo = {
  name: string,
  age: number,
  married: boolean,
  addr: {
    home: string,
    phone: string
  }
} */



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type PersonInfo = {
    name: 'Tom'
    age: 30
    married: false
    addr: {
        home: '123456'
        phone: '13111111111'
    }
    hobbies: ['sing', 'dance']
    readonlyArr: readonly ['test']
    fn: () => any
}

type ExpectedResult = {
    name: string
    age: number
    married: boolean
    addr: {
        home: string
        phone: string
    }
    hobbies: [string, string]
    readonlyArr: readonly [string]
    fn: Function
}

type cases = [
    Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>,
]
