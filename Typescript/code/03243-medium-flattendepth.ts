/**
 * 实现：
 * 1.通过数组push unknown 来根据length统计flat次数
 * 2.每次flat都将结果传给下一次flat，直到次数满足，输出T
 */
type Flat<T> = T extends [infer A, ...infer R] ?
    A extends any[] ? [...A, ...Flat<R>] : [A, ...Flat<R>]
    : T
type FlattenDepth<T, U extends number = 1, C extends unknown[] = []> =
    C['length'] extends U ? T : FlattenDepth<Flat<T>, U, [...C, unknown]>


/* Question：
Recursively flatten array up to depth times.
For example: */
type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaul to be 1
// If the depth is provided, it's guaranteed to be positive integer.




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<FlattenDepth<[]>, []>>,
    Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
    Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
    Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
    Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
    Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
]
