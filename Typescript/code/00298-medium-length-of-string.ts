/**
 * 实现：
 * 1.提供一个类型变量缓存元素
 * 2.递归字符做类型计算，并将字符缓存，直到空字符输出 T['length']
 */
type LengthOfString<S extends string, T extends string[] = []> =
    S extends `${infer P}${infer R}` ? LengthOfString<R, [P, ...T]> : T['length']



/* Question：
计算字符串的长度，类似于 String#length 。 */



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<LengthOfString<''>, 0>>,
    Expect<Equal<LengthOfString<'kumiko'>, 6>>,
    Expect<Equal<LengthOfString<'reina'>, 5>>,
    Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
