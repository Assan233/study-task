/**
 * 实现：
 * TODO: 比较难啃，后面回来补
 */
type Permutation<T> = any

/* Question：
实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。 */

// ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
type perm = Permutation<'A' | 'B' | 'C'>;


/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Permutation<'A'>, ['A']>>,
    Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
    Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
    Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
    Expect<Equal<Permutation<never>, []>>,
]
