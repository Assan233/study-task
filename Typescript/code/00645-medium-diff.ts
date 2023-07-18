/**
 * 实现：
 */
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>




/* Question：
获取两个接口类型中的差值属性。 */
export type Foo1 = {
    a: string;
    b: number;
}
export type Bar1 = {
    a: string;
    c: boolean
}

type Result1 = Diff<Foo1, Bar1> // { b: number, c: boolean }
type Result2 = Diff<Bar1, Foo1> // { b: number, c: boolean }




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

export type Foo = {
    name: string
    age: string
}
export type Bar = {
    name: string
    age: string
    gender: number
}
type Coo = {
    name: string
    gender: number
}

type cases = [
    Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
    Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
    Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
    Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]
