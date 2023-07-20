/**
 * 1.起始规则是：包含Start/不包含End
 * 2.假如 Start===End，看case的预期是 End的优先级高于Start
 * 
 * 实现：
 * 1.还是老一套，通过 递归+infer 获取元组里面的元素
 * 2.通过 R['length'] 判断当前的索引，来设置 isFilling
 * 3.最后根据isFilling来决定要不要填充
 * 
 * isFilling: 是否在填充期间
 * R: 缓存最终填充结果
 */
type Fill<
    T extends unknown[],
    N,
    Start extends number = 0,
    End extends number = T['length'],
    isFilling extends boolean = false,
    R extends any[] = []
> =
    T extends [infer A, ... infer B] ?
    R['length'] extends End ? Fill<B, N, Start, End, false, [...R, A]> :
    R['length'] extends Start ? Fill<B, N, Start, End, true, [...R, N]> :
    Fill<B, N, Start, End, isFilling, [...R, isFilling extends true ? N : A]> :
    R



/* Question：
`Fill`, a common JavaScript function, now let us implement it with types.
`Fill<T, N, Start?, End?>`, as you can see,`Fill` accept four types of parameters, of which `T` and `N` are required parameters, and `Start` and `End` are optional parameters.
The requirement for these parameters are: `T` must be a `tuple`, `N` can be any type of value, `Start` and `End` must be integers greater than or equal to 0. */

type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
type exp2 = Fill<[1, 2, 3], 0, 2, 2> // expected to be [1, 2, 3]
// In order to simulate the real function, the test may contain some boundary conditions, I hope you can enjoy it :)



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Fill<[], 0>, []>>,
    Expect<Equal<Fill<[], 0, 0, 3>, []>>,
    Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
    Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
    Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
    Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
    Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
    Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
    Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
    Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
    Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]
