/**
 * 实现：
 */
type Shift<T> = T extends [infer _, ...infer R] ? R : []



/* Question：
Implement the type version of Array.shift
For example */
type Result = Shift<[3, 2, 1]> // [2, 1]





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Shift<unknown>,
    Expect<Equal<Shift<[]>, []>>,
    Expect<Equal<Shift<[1]>, []>>,
    Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
    Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
]
