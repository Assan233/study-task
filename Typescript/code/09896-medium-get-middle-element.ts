/**
 * 实现：
 * 1.通过两端逼近的方式匹配，当剩余类型只有1个或2个时，此时就是中间的块元素
 * 2.当T只有1个类型时，是无法匹配 [infer A, ...infer R, infer B]的，所以在下一次递归运算时直接输出T就是最终的结果
 */
type GetMiddleElement<T extends any[]> =
    T extends [infer A, ...infer R, infer B] ?
    R['length'] extends 0 ? [A, B] : GetMiddleElement<R> :
    T


/* Question：
通过实现一个 GetMiddleElement 方法，获取数组的中间元素，用数组表示
> 如果数组的长度为奇数，则返回中间一个元素
> 如果数组的长度为偶数，则返回中间两个元素 */
type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]> // 返回 [3]
type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]> // 返回 [3, 4]



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<GetMiddleElement<[]>, []>>,
    Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
    Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
    Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
    Expect<Equal<GetMiddleElement<[() => number, '3', [3, 4], 5]>, ['3', [3, 4]]>>,
    Expect<Equal<GetMiddleElement<[() => string, () => number]>, [() => string, () => number]>>,
    Expect<Equal<GetMiddleElement<[never]>, [never]>>,
]
// @ts-expect-error
type error = GetMiddleElement<1, 2, 3>
