/**
 * 实现：
 * 1.通过数组length来计数
 * 2.因为 any 这种无法直接判断，需要借助Equal来判断
 */
type IndexOf<T, U, C extends number[] = []> = T extends [infer A, ...infer R] ?
    Equal<A, U> extends true ? C['length'] : IndexOf<R, U, [...C, 1]> :
    -1

type sssss = [any] extends [string] ? true : false




/* Question：
Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T. */
type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2 = IndexOf<[string, 1, number, 'a', any], any>; // expected to be -1




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
    Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
    Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
    Expect<Equal<IndexOf<[string, 'a'], 'a'>, 1>>,
    Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
    Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
    Expect<Equal<IndexOf<[any, 1], 1>, 1>>,
]
