/**
 * 实现：
 * 1.通过遍历类型替换字符，并且需要缓存遍历过的类型，输出结果需要用到
 * 
 * B: 缓存遍历过的类型
 */
type ReplaceFirst<T extends readonly unknown[], S, R, B extends unknown[] = []> = T extends [infer A, ...infer C] ?
    A extends S ? [...B, R, ...C] : ReplaceFirst<C, S, R, [...B, A]> :
    B




/* Question：
Implement the type ReplaceFirst<T, S, R> which will replace the first occurrence of S in a tuple T with R. If no such S exis in T, the result should be T. */
type A = ReplaceFirst<[1, 2, 3], 3, 4>; // [1, 2, 4]



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<ReplaceFirst<[1, 2, 3], 3, 4>, [1, 2, 4]>>,
    Expect<Equal<ReplaceFirst<['A', 'B', 'C'], 'C', 'D'>, ['A', 'B', 'D']>>,
    Expect<Equal<ReplaceFirst<[true, true, true], true, false>, [false, true, true]>>,
    Expect<Equal<ReplaceFirst<[string, boolean, number], boolean, string>, [string, string, number]>>,
    Expect<Equal<ReplaceFirst<[1, 'two', 3], string, 2>, [1, 2, 3]>>,
    Expect<Equal<ReplaceFirst<['six', 'eight', 'ten'], 'eleven', 'twelve'>, ['six', 'eight', 'ten']>>,
]
