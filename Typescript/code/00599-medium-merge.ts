/**
 * 实现：
 */
type Merge<F extends Object, S extends Object> = {
    [K in (keyof F | keyof S)]: K extends keyof S ?
    S[K] : (K extends keyof F ? F[K] : never)
}




/* Question：
将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。
例如 */
type foo = {
    name: string;
    age: string;
}

type coo = {
    age: number;
    sex: string
}

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
    a: number
    b: string
}
type Bar = {
    b: number
    c: boolean
}

type cases = [
    Expect<Equal<Merge<Foo, Bar>, {
        a: number
        b: number
        c: boolean
    }>>,
]
