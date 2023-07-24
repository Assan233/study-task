/**
 * 实现：
 * 1.这道题和 04260-medium-nomiwase 类似，通过联合类型拼接字符串自动排列组合
 * 2.通过 extends 每次获取一个联合类型U的元素
 * 3.通过Exclude排除当前元素
 * ###
 */
type Combination<T extends string[], U = T[number], K = U> =
    U extends string
    ? U | `${U} ${Combination<[], Exclude<K, U>>}`
    : never



/* Question：
Given an array of strings, do Permutation & Combination.
It's also useful for the prop types like video [controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList) */

// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Keys = Combination<['foo', 'bar', 'baz']>




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Combination<['foo', 'bar', 'baz']>,
        'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]
