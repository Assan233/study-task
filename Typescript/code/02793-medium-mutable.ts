/**
 * 实现：
 * 1.通过 -readonly 声明属性可读写
 */
type Mutable<T> = {
    -readonly [P in keyof T]: T[P]
}



/* Question：
实现一个通用的类型 Mutable<T>，使类型 `T` 的全部属性可变（非只读）。
例如： */
interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
}

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }






/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
    title: string
    description: string
    completed: boolean
    meta: {
        author: string
    }
}

type List = [1, 2, 3]

type cases = [
    Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
    Expect<Equal<Mutable<Readonly<List>>, List>>,
]

type errors = [
    Mutable<'string'>,
    Mutable<0>,
]
