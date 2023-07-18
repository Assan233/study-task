/**
 * 实现：
 */
type StartsWith<T extends string, U extends string> = T extends `${U}${infer _}` ? true : false;



/* Question：
实现`StartsWith<T, U>`,接收两个string类型参数,然后判断`T`是否以`U`开头,根据结果返回`true`或`false`
例如: */
type a = StartsWith<'abc', 'ac'> // expected to be false
type b = StartsWith<'abc', 'ab'> // expected to be true
type c = StartsWith<'abc', 'abcd'> // expected to be false





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
    Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
    Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
    Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
    Expect<Equal<StartsWith<'abc', ''>, true>>,
    Expect<Equal<StartsWith<'abc', ' '>, false>>,
    Expect<Equal<StartsWith<'', ''>, true>>,
]
