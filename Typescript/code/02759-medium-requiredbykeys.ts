/**
 * 实现：
 * 1.实现思路和 PartialByKeys 一致
 * 2.通过 -? 方式声明属性为必选
 */
type Merge<T extends Object> = {
    [K in keyof T]: T[K]
}
type RequiredByKeys<T, K = keyof T> = Merge<
    {
        [P in keyof T as P extends K ? P : never]-?: T[P];
    } &
    {
        [U in keyof T as U extends K ? never : U]?: T[U];
    }
>

// 2.通过内置工具Required + Partial 实现
// type RequiredByKeys<T, K extends keyof T = keyof T> = Merge<Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>>


/* Question：
实现一个通用的`RequiredByKeys<T, K>`，它接收两个类型参数`T`和`K`。
`K`指定应设为必选的`T`的属性集。当没有提供`K`时，它就和普通的`Required<T>`一样使所有的属性成为必选的。
例如: */


interface User {
    name?: string
    age?: number
    address?: string
}

type _UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface User {
    name?: string
    age?: number
    address?: string
}

interface UserRequiredName {
    name: string
    age?: number
    address?: string
}

interface UserRequiredNameAndAge {
    name: string
    age: number
    address?: string
}

type cases = [
    Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
    Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
    Expect<Equal<RequiredByKeys<User>, Required<User>>>,
    Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
]
