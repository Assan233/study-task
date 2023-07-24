/**
 * 实现：
 * 这题比较简单，通过infer逐个取出元素，进行简单的组合就可以
 */
type Subsequence<T extends any[], C extends any[] = []> = T extends [infer A, ...infer R] ?
    Subsequence<R, C | [...C, A]> : C




/* Question：
Given an array of unique element, return all possible subsequences.
A subsequence is a sequence that can be derived from an array by deleting some or no element without changing the order of the remaining element.
For example: */
type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
    Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]>>,
]
