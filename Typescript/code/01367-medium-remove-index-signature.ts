/**
 * 实现：
 * 1.通过索引类型keyof查询对象的索引类型
 * 2.逐次对索引类型做排除string|number|symbol,最终得到没有索引签名的类型.
 */
type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : symbol extends K ? never : K]: T[K]
}



/** Question：
 * 实现 RemoveIndexSignature<T>" 意味着你需要创建一个类型操作，将给定类型 T 中的索引签名（index signature）排除掉。
 * [索引签名: 索引签名（Index Signature）它允许你在对象类型中定义一个通用的索引访问方式，使对象可以通过索引访问属性。]
 * ###
 */


type _Foo = {
    [key: string]: any
    foo(): void
}

type A = RemoveIndexSignature<_Foo> // expected { foo(): void }
type K = keyof _Foo



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
    [key: string]: any
    foo(): void
}

type Bar = {
    [key: number]: any
    bar(): void
    0: string
}

const foobar = Symbol('foobar')
type FooBar = {
    [key: symbol]: any
    [foobar](): void
}

type Baz = {
    bar(): void
    baz: string
}

type cases = [
    Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
    Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
    Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
    Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>,
]
