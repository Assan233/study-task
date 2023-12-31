/**
 * 实现：
 * 1.通过 -readonly可读修饰符 递归的将所有属性修改为可读即可
 */
type DeepMutable<T extends Record<string, any>> = {
    -readonly [K in keyof T]: T[K] extends Function ?
    T[K] :
    T[K] extends object ? DeepMutable<T[K]> : T[K]
}





/* Question：
实现一个通用的 DeepMutable<T> ，它使对象的每个属性，及其递归的子属性 - 可变。
(你可以假设我们在这个挑战中只处理对象。 数组、函数、类等不需要考虑。 但是，您仍然可以通过涵盖尽可能多的不同案例来挑战自己。)
例如： */
type X = {
    readonly a: () => 1
    readonly b: string
    readonly c: {
        readonly d: boolean
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true
                    readonly j: "s"
                }
                readonly k: "hello"
            }
        }
    }
}

type Expected = {
    a: () => 1
    b: string
    c: {
        d: boolean
        e: {
            g: {
                h: {
                    i: true
                    j: "s"
                }
                k: "hello"
            }
        }
    }
}
type Todo = DeepMutable<Test2> // should be same as `Expected`





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface Test1 {
    readonly title: string
    readonly description: string
    readonly completed: boolean
    readonly meta: {
        readonly author: string
    }
}
type Test2 = {
    readonly a: () => 1
    readonly b: string
    readonly c: {
        readonly d: boolean
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true
                    readonly j: 's'
                }
                readonly k: 'hello'
            }
            readonly l: readonly [
                'hi',
                {
                    readonly m: readonly ['hey']
                },
            ]
        }
    }
}
interface DeepMutableTest1 {
    title: string
    description: string
    completed: boolean
    meta: {
        author: string
    }
}

type DeepMutableTest2 = {
    a: () => 1
    b: string
    c: {
        d: boolean
        e: {
            g: {
                h: {
                    i: true
                    j: 's'
                }
                k: 'hello'
            }
            l: [
                'hi',
                {
                    m: ['hey']
                },
            ]
        }
    }
}

type cases = [
    Expect<Equal<DeepMutable<Test1>, DeepMutableTest1>>,
    Expect<Equal<DeepMutable<Test2>, DeepMutableTest2>>,
]

type errors = [
    // @ts-expect-error
    DeepMutable<'string'>,
    // @ts-expect-error
    DeepMutable<0>,
]
