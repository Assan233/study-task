/**
 * 实现：
 */
type Filter<T extends any[], U, P extends any[] = []> = T extends [infer A, ...infer R] ?
    A extends U ? Filter<R, U, [...P, A]> : Filter<R, U, P> :
    P



/* Question：
Implement the type `Filter<T, Predicate>` takes an Array `T`, primitive type or union primitive type `Predicate` and returns an Array include the elemen of `Predicate`. */



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type Falsy = false | 0 | '' | null | undefined

type cases = [
    Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
    Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
    Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
]
