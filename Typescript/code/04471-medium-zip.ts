/**
 * 实现：
 * 1.新增类型参数C缓存结果，根据C[length]来获取 T和U的值
 * 2.通过infer 来递归获取元素，如果U此时取不到值，则不往类型C push结果
 */
type Zip<T extends any[], U extends any[], C extends any[] = []> = T extends [infer A, ...infer R] ?
    Zip<R, U, U[C['length']] extends undefined ? [...C] : [...C, [A, U[C['length']]]]> :
    C




/* Question：
In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple` */
type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Zip<[], []>, []>>,
    Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
    Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
    Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
    Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]
