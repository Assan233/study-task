/**
 * 实现：
 * 1.递归遍历数组获取元素
 * 2.用类型I缓存每个Chunk，类型C缓存结果，通过判断I的length来决定要不要清空I, 将I push进 类型C，否则继续往类型I push
 * 3.最终需要判断一下类型I里面还有没有元素，有的话和类型C做合并。
 * 类型I：缓存每个Chunk
 * 类型C: 缓存最终的结果
 */
type Chunk<T, U, I extends any[] = [], C extends any[] = []> =
    T extends [infer A, ...infer R] ?
        [1, ...I]['length'] extends U ?
        Chunk<R, U, [], [...C, [...I, A]]> :
        Chunk<R, U, [...I, A], C> :
    I['length'] extends 0 ? C : [...C, I]


    

/* Question：
Do you know `lodash`? `Chunk` is a very useful function in it, now let's implement it.
`Chunk<T, N>` accept two required type parameters, the `T` must be a `tuple`, and the `N` must be an `integer >=1` */
type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Chunk<[], 1>, []>>,
    Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
    Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
    Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
    Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
    Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]
