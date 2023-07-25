/**
 * 实现：
 * 1.新增类型参数B，缓存遍历过的元素
 * 2.将 当前元素 和 遍历过的元素+剩余元素 对比，如果存在则重复，返回true
 */
type CheckRepeatedTuple<T extends unknown[], B extends unknown[] = []> =
    T extends [infer A, ...infer R] ?
    A extends [...R, ...B][number] ? true : CheckRepeatedTuple<R, [...B, A]> :
    false




/* Question：
判断一个元组类型中是否有相同的成员
For example: */
type A = CheckRepeatedTuple<[1, 2, 3]>   // false
type B = CheckRepeatedTuple<[1, 2, 1]>   // true




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
    Expect<Equal<CheckRepeatedTuple<[number, number, string, boolean]>, true>>,
    Expect<Equal<CheckRepeatedTuple<[number, string]>, false>>,
    Expect<Equal<CheckRepeatedTuple<[1, 2, 3]>, false>>,
    Expect<Equal<CheckRepeatedTuple<[1, 2, 1]>, true>>,
    Expect<Equal<CheckRepeatedTuple<[]>, false>>,
    Expect<Equal<CheckRepeatedTuple<string[]>, false>>,
]
