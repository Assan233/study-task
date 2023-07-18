/**
 * 实现：
 * 1.通过[]取消条件类型做分布式类型计算
 * 
 * 有意思的是, 刚开始我是这么写的: T extends never ? true : false // 结果是never
 * 结果看起来有点违反直觉, 网上找到的解释是:
 * 当 never 充当实参去实例化泛型形参的时候，它被看作没有任何成员的联合类型。
 * 当 tsc 对没有成员的联合类型执行分布式类型计算时，tsc 认为这么做没有任何意义，所以就不执行这代码，直接返回 never。
 * 所以我们直接通过[]来取消分布式类型计算,达到预期的结果
 */
type IsNever<T> = [T] extends [never] ? true : false

/**
 * 另外一种答案:
 */
// type IsNever<T> = Equal<never, T>



/* QUESTION：
Implement a type IsNever, which takes input type `T`.
If the type of resolves to `never`, return `true`, otherwise `false`.
For example: */


type A = IsNever<never> // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<IsNever<never>, true>>,
    Expect<Equal<IsNever<never | string>, false>>,
    Expect<Equal<IsNever<''>, false>>,
    Expect<Equal<IsNever<undefined>, false>>,
    Expect<Equal<IsNever<null>, false>>,
    Expect<Equal<IsNever<[]>, false>>,
    Expect<Equal<IsNever<{}>, false>>,
]
