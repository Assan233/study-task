/**
 * 实现：
 * 通过C是不是为空来决定要不要填充第一个
 */
type Join<T extends string[], U extends string | number, C extends string = ''> =
    T extends [infer A extends string, ...infer R extends string[]] ?
    Join<R, U, `${C}${C extends '' ? '' : U}${A}`> :
    C

/**
 * 通过判断 R 的 length 是否为 0 来决定要不要填充最后一个
 */
// type Join<T extends string[], U extends string | number> =
//     T extends [infer L extends string, ...infer R extends string[]]
//     ? R['length'] extends 0
//     ? L
//     : `${L}${U}${Join<R, U>}`
//     : ''




/* Question：
Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up. */
type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
    Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
    Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
    Expect<Equal<Join<['o'], 'u'>, 'o'>>,
    Expect<Equal<Join<[], 'u'>, ''>>,
]
