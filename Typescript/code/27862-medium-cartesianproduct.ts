/**
 * 实现：
 * 1.根据联合类型的遍历规则，遍历时会进行循环，因此这里相当于两层 for 循环遍历即可
 */
type CartesianProduct<T, U> = T extends T
    ? U extends U
    ? [T, U]
    : never
    : never




/* Question：
Given 2 se (unions), return i Cartesian product in a set of tuples, 
e.g: */
type A = CartesianProduct<1 | 2, 'a' | 'b'> // [1, 'a'] | [2, 'a'] | [1, 'b'] | [2, 'b']





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<CartesianProduct<1 | 2, 'a' | 'b'>, [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b']>>,
    Expect<Equal<CartesianProduct<1 | 2 | 3, 'a' | 'b' | 'c'>, [2, 'a'] | [1, 'a'] | [3, 'a'] | [2, 'b'] | [1, 'b'] | [3, 'b'] | [2, 'c'] | [1, 'c'] | [3, 'c']>>,
    Expect<Equal<CartesianProduct<1 | 2, 'a' | never>, [2, 'a'] | [1, 'a']>>,
    Expect<Equal<CartesianProduct<'a', Function | string>, ['a', Function] | ['a', string]>>,
]
