/**
 * 实现：
 * 1.通过元组类型判断never
 * 2.利用数组length类型为number判断元组
 * 
 */type IsTuple<T> =
    [T] extends [never] ? false :
    T extends readonly any[] ?
    number extends T['length'] ? false : true
    : false




/* Question：
Implement a type IsTuple, which takes an input type T and returns whether T is tuple type.
For example: */


type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false

type C = any[]['length']


/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<IsTuple<[]>, true>>,
    Expect<Equal<IsTuple<[number]>, true>>,
    Expect<Equal<IsTuple<readonly [1]>, true>>,
    Expect<Equal<IsTuple<{ length: 1 }>, false>>,
    Expect<Equal<IsTuple<number[]>, false>>,
    Expect<Equal<IsTuple<never>, false>>,
]
