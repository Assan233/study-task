/**
 * 实现：
 * 1.实现平方的效果，相当于将N个长度为N的元素合并得到的长度，就是N²的结果。
 * 2.通过C['length']来逐次填充长度为N的元组，最终通过 R['length'] 输出结果
 * 
 * 
 * M: 缓存长度为N的元组，方便后续填充
 * C: 统计当前遍历次数
 * R: 缓存结果
 */
type GetPureNumber<T extends number> = `${T}` extends `-${infer A}` ? A : `${T}`
type GenTupleByNumber<T extends number, C extends 1[] = []> = `${C['length']}` extends GetPureNumber<T> ?
    C :
    GenTupleByNumber<T, [...C, 1]>

type Square<N extends number, M extends 1[] = GenTupleByNumber<N>, C extends 1[] = [], R extends 1[] = []> =
    `${C['length']}` extends `${GetPureNumber<N>}` ?
    R['length'] :
    Square<N, M, [...C, 1], [...R, ...M]>


type A = Square<-5> //25


/* Question：
Given a number, your type should return i square. */




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Square<0>, 0>>,
    Expect<Equal<Square<1>, 1>>,
    Expect<Equal<Square<3>, 9>>,
    Expect<Equal<Square<20>, 400>>,
    Expect<Equal<Square<100>, 10000>>,

    // Negative numbers
    Expect<Equal<Square<-2>, 4>>,
    Expect<Equal<Square<-5>, 25>>,
    Expect<Equal<Square<-31>, 961>>,
    Expect<Equal<Square<-50>, 2500>>,
]
