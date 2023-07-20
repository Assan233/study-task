/**
 * 实现：
 * 1.将需要剔除的类型转成联合类型并缓存起来，方便后面判断使用
 * 2.通过递归获取元素判断是否需要剔除，不需要剔除的缓存起来
 * 3.最后返回结果
 */
type Tuple2Union<T extends any[] | number, C = never> = T extends number ?
    T :
    T extends [infer A, ...infer R] ?
    Tuple2Union<R, A | C> :
    C;

type Without<T extends any[], U extends any[] | number, M extends any = Tuple2Union<U>, C extends any[] = []> =
    T extends [infer A, ...infer R] ?
    A extends M ?
    Without<R, U, M, C> :
    Without<R, U, M, [...C, A]> :
    C



/* Question：
实现一个像 Lodash.without 函数一样的泛型 Without<T, U>，它接收数组类型的 T 和数字或数组类型的 U 为参数，会返回一个去除 U 中元素的数组 T。
例如： */
type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Without<[1, 2], 1>, [2]>>,
    Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
    Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]
