/**
 * 实现：
 * 刚开始打算通过 A extends C[number] 做include 的逻辑，但是写完发现case4/case5无法满足
 * 所以需要实现一个includes逻辑
 * 1.Includes 借助Equal通过递归的方式实现
 */
type Includes<T, U> = U extends [infer A, ...infer R] ?
    Equal<A, T> extends true ?
    true :
    Includes<T, R> :
    false;

type Unique<T extends any[], C extends any[] = []> =
    T extends [infer A, ...infer R] ?
    Includes<A, C> extends true ? Unique<R, [...C]> : Unique<R, [...C, A]> :
    C



/* Question：
实现类型版本的 Lodash.uniq 方法, Unique<T> 接收数组类型 T, 返回去重后的数组类型. */
type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
    Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
    Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
    Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
    Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
]
