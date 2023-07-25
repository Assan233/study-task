/**
 * 实现：
 * 1.每次遍历逐次累加元组C和元组R就可以了
 * 
 * C: 统计当前遍历次数
 * R: 缓存结果
 */

type Triangular<N extends number, C extends 1[] = [], R extends 1[] = []> =
    C['length'] extends N ?
    R['length'] :
    Triangular<N, [...C, 1], [...R, ...C, 1]>


/* Question：
Given a number N, find the Nth triangular number, i.e. `1 + 2 + 3 + ... + N` */
type A = Triangular<3> // 6




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Triangular<0>, 0>>,
    Expect<Equal<Triangular<1>, 1>>,
    Expect<Equal<Triangular<3>, 6>>,
    Expect<Equal<Triangular<10>, 55>>,
    Expect<Equal<Triangular<20>, 210>>,
    Expect<Equal<Triangular<55>, 1540>>,
    Expect<Equal<Triangular<100>, 5050>>,
]
