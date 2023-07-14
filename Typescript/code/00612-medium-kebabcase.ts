/**
 * 实现：
 * 1.通过递归做KebabCase类型计算, 来拼接字符
 * 2.提供分隔符类型R并且默认值为'', 是为了避免首次匹配多一个分隔符的问题
 * 3.需要注意的是, extends Uppercase<string> 是true, 所以这里通过联合类型 UpperLetter 来缩小范围
 */
type UpperLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'
type KebabCase<S extends string, R extends string = ''> = S extends `${infer U}${infer Rest}` ?
    U extends UpperLetter ? `${R}${Lowercase<U>}${KebabCase<Rest, '-'>}` : `${U}${KebabCase<Rest, '-'>}`
    : S


/* Question：
Replace the `camelCase` or `PascalCase` string with `kebab -case `.
`FooBarBaz` -> `foo - bar - baz`
For example */


type FooBarBaz = KebabCase<"FooBarBaz">
const foobarbaz: FooBarBaz = "foo-bar-baz"

type DoNothing = KebabCase<"do-nothing">
const doNothing: DoNothing = "do-nothing"




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
    Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
    Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
    Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
    Expect<Equal<KebabCase<'-'>, '-'>>,
    Expect<Equal<KebabCase<''>, ''>>,
    Expect<Equal<KebabCase<'😎'>, '😎'>>,
]
