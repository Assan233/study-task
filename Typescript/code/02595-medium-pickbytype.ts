/**
 * 实现：
 * 1.通过判断值的类型来决定key是否保留
 */
type PickByType<T, U> = {
    [K in keyof T as U extends T[K] ? K : never]: T[K]
}



/* Question：
From `T`, pick a set of properties whose type are assignable to `U`.
For Example
 */

type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}

type cases = [
    Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
    Expect<Equal<PickByType<Model, string>, { name: string }>>,
    Expect<Equal<PickByType<Model, number>, { count: number }>>,
]
