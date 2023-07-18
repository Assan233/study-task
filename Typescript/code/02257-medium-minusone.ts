/**
 * 实现：
 * 1.通过创建数组,获取数组length来实现 -1
 */
type CreateArrayByLength<T extends number, A extends unknown[] = []> = A['length'] extends T ? A : CreateArrayByLength<T, [...A, unknown]>
type MinusOne<T extends number> = CreateArrayByLength<T> extends [...infer A, infer L] ? A['length'] : -1


/* Question：
给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。
例如: */
type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54


/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MinusOne<1>, 0>>,
    Expect<Equal<MinusOne<55>, 54>>,
    Expect<Equal<MinusOne<3>, 2>>,
    Expect<Equal<MinusOne<100>, 99>>,
    Expect<Equal<MinusOne<1101>, 1100>>,
    Expect<Equal<MinusOne<0>, -1>>,
    Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]
