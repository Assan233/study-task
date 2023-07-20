/**
 * 实现：
 * 1.通过数组长度比较T和U，当数组长度对于T或者U时，就可以知道谁更小了
 */
type GreaterThan<T extends number, U extends number, C extends any[] = []> = C['length'] extends T ?
    false :
    C['length'] extends U ? true : GreaterThan<T, U, [...C, 1]>


    


/* Question：
In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`
Negative numbers do not need to be considered.
Good Luck!
For example: */
type A = GreaterThan<2, 1> //should be true
type B = GreaterThan<1, 1> //should be false
type C = GreaterThan<10, 100> //should be false
type D = GreaterThan<111, 11> //should be true





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<GreaterThan<1, 0>, true>>,
    Expect<Equal<GreaterThan<5, 4>, true>>,
    Expect<Equal<GreaterThan<4, 5>, false>>,
    Expect<Equal<GreaterThan<0, 0>, false>>,
    Expect<Equal<GreaterThan<10, 9>, true>>,
    Expect<Equal<GreaterThan<20, 20>, false>>,
    Expect<Equal<GreaterThan<10, 100>, false>>,
    Expect<Equal<GreaterThan<111, 11>, true>>,
    Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]
