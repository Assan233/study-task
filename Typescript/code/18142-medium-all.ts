/**
 * 实现：
 * 1. 如果元组内所有元素一致，那么元组的联合类型只有一个元素
 * 2.因为any和unknown无法比较，所以需要借助内置类型工具Equal 判断T[number]和U是否相等
 */
type All<T extends any[], U> = Equal<T[number], U> extends true ? true : false





/* Question：
Returns true if all element of the list are equal to the second parameter passed in, false if there are any mismatches.
For example */
type Test1 = [1, 1, 1]
type Test2 = [1, 1, 2]

type Todo = All<Test1, 1> // should be same as true
type Todo2 = All<Test2, 1> // should be same as false





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<All<[1, 1, 1], 1>, true>>,
    Expect<Equal<All<[1, 1, 2], 1>, false>>,
    Expect<Equal<All<['1', '1', '1'], '1'>, true>>,
    Expect<Equal<All<['1', '1', '1'], 1>, false>>,
    Expect<Equal<All<[number, number, number], number>, true>>,
    Expect<Equal<All<[number, number, string], number>, false>>,
    Expect<Equal<All<[null, null, null], null>, true>>,
    Expect<Equal<All<[[1], [1], [1]], [1]>, true>>,
    Expect<Equal<All<[{}, {}, {}], {}>, true>>,
    Expect<Equal<All<[never], never>, true>>,
    Expect<Equal<All<[any], any>, true>>,
    Expect<Equal<All<[unknown], unknown>, true>>,
    Expect<Equal<All<[any], unknown>, false>>,
    Expect<Equal<All<[unknown], any>, false>>,
]
