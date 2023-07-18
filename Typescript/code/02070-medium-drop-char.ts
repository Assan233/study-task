/**
 * 实现：
 * 1.通过匹配类型C,对字符串进行递归替换
 * 需要注意的是 AB 是可以匹配 `${infer L}A${infer R}`的, 此时R-->B
 */
type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}` ? DropChar<`${L}${R}`, C> : S;


/* Question：
从字符串中剔除指定字符。
例如： */
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
type A<S> = S extends `${infer A}${infer B}` ? A : never



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    // @ts-expect-error
    Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
    Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
    Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
    Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
    Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
    Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
    Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]
