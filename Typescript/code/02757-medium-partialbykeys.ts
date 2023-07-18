/**
 * 实现：
 * 1.类型K默认是keyof T,保证没传值时,是全部可选
 * 2.最终类型是合并的,需要通过Merge来合并
 */
type Merge<T extends Object> = {
    [K in keyof T]: T[K]
}
type PartialByKeys<T, K = keyof T> = Merge<
    {
        [P in keyof T as P extends K ? P : never]?: T[P];
    } &
    {
        [U in keyof T as U extends K ? never : U]: T[U];
    }
>




/* Question：
实现一个通用的`PartialByKeys<T, K>`，它接收两个类型参数`T`和`K`。
`K`指定应设置为可选的`T`的属性集。当没有提供`K`时，它就和普通的`Partial<T>`一样使所有属性都是可选的。
例如: */


interface User {
    name: string
    age: number
    address: string
}

type _UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface User {
    name: string
    age: number
    address: string
}

interface UserPartialName {
    name?: string
    age: number
    address: string
}

interface UserPartialNameAndAge {
    name?: string
    age?: number
    address: string
}

type cases = [
    Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
    Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
    Expect<Equal<PartialByKeys<User>, Partial<User>>>,
    Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
]
