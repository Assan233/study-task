/**
 * 实现：
 * 1.通过当前元素和除了当前元素之外的元组匹配，得到不重复的元素缓存起来。然后递归重复这个过程
 * 2.因为需要拿到除了当前元素之外的元组，所以需要新增类型缓存匹配过的元素和缓存最终结果
 * 
 * B: 缓存匹配过的元素
 * C: 缓存结果
 */
type FindElse<T extends any[], B extends any[] = [], C extends any[] = []> =
    T extends [infer A, ...infer R] ?
    A extends [...B, ...R][number] ?
    FindElse<R, [...B, A], C> : FindElse<R, [...B], [...C, A]> :
    C




/* Question：
找出目标数组中只出现过一次的元素。例如：输入[1,2,2,3,3,4,5,6,6,6]，输出[1,4,5] */
type A = FindElse<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>; // [1, 4, 5]




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<FindElse<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
    Expect<Equal<FindElse<[2, 2, 3, 3, 6, 6, 6]>, []>>,
    Expect<Equal<FindElse<[1, 2, 3]>, [1, 2, 3]>>,
]
