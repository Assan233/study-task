/**
 * 实现：
 */
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : `${T}`



/* Question：
实现一个接收string,number或bigInt类型参数的`Absolute`类型,返回一个正数字符串。
例如 */
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Absolute<0>, '0'>>,
    Expect<Equal<Absolute<-0>, '0'>>,
    Expect<Equal<Absolute<10>, '10'>>,
    Expect<Equal<Absolute<-5>, '5'>>,
    Expect<Equal<Absolute<'0'>, '0'>>,
    Expect<Equal<Absolute<'-0'>, '0'>>,
    Expect<Equal<Absolute<'10'>, '10'>>,
    Expect<Equal<Absolute<'-5'>, '5'>>,
    Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
    Expect<Equal<Absolute<9_999n>, '9999'>>,
]
