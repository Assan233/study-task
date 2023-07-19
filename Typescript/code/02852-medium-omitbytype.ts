/**
 * 实现：
 * 1.通过类型断言对值进行key的过滤
 */
type OmitByType<T, U> = {
    [K in keyof T as T[K] extends U ? never : K]: T[K]
}



/* Question：
From T, pick a set of properties whose type are not assignable to U.
For Example */
type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}, boolean> // { name: string; count: number }





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
    Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
    Expect<Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>,
    Expect<Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>,
]
