/**
 * 实现：
 * 1.先判断T是不是字面量number，不是的话输出never
 * 2.通过字符字面量 . 匹配小数点数字
 * 3.判断小数点数字是不是都为0，都是0，输出小数点前面的整数
 * 4.如果匹配不上 . 字面量，则直接输出T
 */
type IsZero<T extends string> = T extends `${infer A}${infer R}` ? A extends '0' ? IsZero<R> : false : true
type Integer<T extends number> = number extends T ?
    never :
    `${T}` extends `${infer A}.${infer R}` ?
    IsZero<R> extends true ? A : never :
    T;


/* Question：
请完成类型 `Integer<T>`，类型 `T` 继承于 `number`，如果 `T` 是一个整数则返回它，否则返回 `never`。 */



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

let x = 1
let y = 1 as const
type ddd = number extends 1 ? 2 : 3

type cases1 = [
    Expect<Equal<Integer<1>, 1>>,
    Expect<Equal<Integer<1.1>, never>>,
    Expect<Equal<Integer<1.0>, 1>>,
    Expect<Equal<Integer<1.000000000>, 1>>,
    Expect<Equal<Integer<0.5>, never>>,
    Expect<Equal<Integer<28.00>, 28>>,
    Expect<Equal<Integer<28.101>, never>>,
    Expect<Equal<Integer<typeof x>, never>>,
    Expect<Equal<Integer<typeof y>, 1>>,
]
