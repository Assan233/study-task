/**
 * 实现：
 */
type EndsWith<T extends string, U extends string> = T extends `${infer _}${U}` ? true : false;



/* Question：
实现`EndsWith<T, U>`,接收两个string类型参数,然后判断`T`是否以`U`结尾,根据结果返回`true`或`false`
例如: */


type a = EndsWith<'abc', 'bc'> // expected to be true
type b = EndsWith<'abc', 'abc'> // expected to be true
type c = EndsWith<'abc', 'd'> // expected to be false



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
    Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
    Expect<Equal<EndsWith<'abc', 'd'>, false>>,
    Expect<Equal<EndsWith<'abc', 'ac'>, false>>,
    Expect<Equal<EndsWith<'abc', ''>, true>>,
    Expect<Equal<EndsWith<'abc', ' '>, false>>,
]
