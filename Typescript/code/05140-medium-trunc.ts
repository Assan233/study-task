/**
 * 实现：
 * 题目比较简单，通过占位符就可以拿到结果
 */
type Trunc<T extends string | number> = `${T}` extends `${infer A}.${infer _}` ? A extends '' ? '0' : A : `${T}`



/* Question：
Implement the type version of Math.trunc, which takes string or number and returns the integer part of a number by removing any fractional digi.
For example: */


type A = Trunc<12.34> // 12




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Trunc<0.1>, '0'>>,
    Expect<Equal<Trunc<0.2>, '0'>>,
    Expect<Equal<Trunc<1.234>, '1'>>,
    Expect<Equal<Trunc<12.345>, '12'>>,
    Expect<Equal<Trunc<-5.1>, '-5'>>,
    Expect<Equal<Trunc<'.3'>, '0'>>,
    Expect<Equal<Trunc<'1.234'>, '1'>>,
    Expect<Equal<Trunc<'-10.234'>, '-10'>>,
    Expect<Equal<Trunc<10>, '10'>>,
]
