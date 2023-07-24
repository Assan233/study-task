/**
 * 实现：
 * 1.通过递归字符匹配判断字符重复
 */
type CheckRepeatedChars<T extends string, C extends string = ''> = T extends `${infer A}${infer R}` ?
    C extends `${infer __}${A}${infer _}` ? true : CheckRepeatedChars<R, `${C}${A}`> :
    false




/* Question：
判断一个string类型中是否有相同的字符 */
type A = CheckRepeatedChars<'abc'>   // false
type B = CheckRepeatedChars<'aba'>   // true





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
    Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
    Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
    Expect<Equal<CheckRepeatedChars<''>, false>>,
]
