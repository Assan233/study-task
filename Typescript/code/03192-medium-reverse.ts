/**
 * 实现：
 * 1.从末尾开始递归遍历做翻转
 * 2.因为Reverse输出的是数组类型, 所以需要...展开
 */
type Reverse<T> = T extends [...infer R, infer U] ? [U, ...Reverse<R>] : []



/* Question：
实现类型版本的数组反转 Array.reverse
例如： */
type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Reverse<[]>, []>>,
    Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
    Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]

type errors = [
    Reverse<'string'>,
    Reverse<{ key: 'value' }>,
]
