/**
 * 实现：
 * 1.实现方式和TrimLeft一样，通过字面量占位匹配字符
 */
type Space = ' ' | '\n' | '\t';
type TrimRight<S extends string> = S extends `${infer R}${Space}` ? TrimRight<R> : S;




/* Question：
实现 `TrimRight<T>` ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串结尾的空白字符串。
例如 */
type Trimed = TrimRight<'  Hello World  '> // 应推导出 '  Hello World'




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<TrimRight<'str'>, 'str'>>,
    Expect<Equal<TrimRight<'str '>, 'str'>>,
    Expect<Equal<TrimRight<'str     '>, 'str'>>,
    Expect<Equal<TrimRight<'     str     '>, '     str'>>,
    Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
    Expect<Equal<TrimRight<''>, ''>>,
    Expect<Equal<TrimRight<'\n\t '>, ''>>,
]
