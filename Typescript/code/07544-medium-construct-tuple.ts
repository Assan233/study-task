/**
 * 实现：
 * 1.这题比较简单，通过新增类型参数C, 对length进行条件类型判断就可以了
 */
type ConstructTuple<L extends number, C extends any[] = []> = L extends C['length'] ? C : ConstructTuple<L, [...C, unknown]>



/* Question：
构造一个给定长度的元组。
例如 */
type result = ConstructTuple<2> // 期望得到 [unknown, unkonwn]




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<ConstructTuple<0>, []>>,
    Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
    Expect<Equal<ConstructTuple<999>['length'], 999>>,
    // @ts-expect-error
    Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]
