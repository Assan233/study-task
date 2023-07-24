/**
 * 实现：
 * 1.通过字符类型变量匹配字符是否重复
 * 2.每个字符都要与除了自身之外的所有字符匹配，为了防止匹配到最后一个字符时
 *   无字符匹配，所以需要通过类型B缓存之前匹配的字符
 */
type FirstUniqueCharIndex<T extends string, B extends string = '', C extends 1[] = []> =
    T extends `${infer A}${infer R}` ?
    `${B}${R}` extends `${infer _}${A}${infer __}` ?
    FirstUniqueCharIndex<R, `${B}${A}`, [...C, 1]> :
    C['length'] :
    -1



/* Question：
Given a string s, find the first non-repeating character in it and return i index. If it does not exist, return -1. (Inspired by [leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/)) */



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
    Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
    Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
    Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
    Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
]
