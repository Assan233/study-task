/**
 * 实现：
 * 1.实现缓存的方式还是老一套，通过新增默认类型的方式缓存
 * 2.需要注意处理子元素是数组时，Flat的范围要扩大到剩余元素P，不然会造成剩余元素丢失
 */
type Flatten<T extends unknown[], F extends unknown[] = []> = T extends [infer U, ...infer P] ?
    (U extends unknown[] ? Flatten<[...U, ...P], F> : Flatten<P, [...F, U]>) :
    F



/* Question：
在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。
例如: */
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Flatten<[]>, []>>,
    Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
    Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
    Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]

// @ts-expect-error
type error = Flatten<'1'>
