/**
 * 实现：
 * 1.key通过遍历 keyof A | keyof C 获取
 * 2.value通过判断key的所属关系设置
 * 3.最终通过新增类型C缓存
 */
type MergeAll<X, C extends object = {}> = X extends [infer A, ...infer R] ?
    MergeAll<R, {
        [K in keyof A | keyof C]:
        K extends keyof A ?
        K extends keyof C ? C[K] | A[K] :
        A[K] :
        K extends keyof C ? C[K] :
        never
    }> :
    C



/* Question：
Merge variadic number of types into a new type. If the keys overlap, i values should be merged into an union.
For example: */
type Foo = { a: 1; b: 2 }
type Bar = { a: 2 }
type Baz = { c: 3 }

type Result = MergeAll<[Foo, Bar, Baz]> // expected to be { a: 1 | 2; b: 2; c: 3 }

type ccc = keyof Foo

/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MergeAll<[]>, {}>>,
    Expect<Equal<MergeAll<[{ a: 1 }]>, { a: 1 }>>,
    Expect<Equal<
        MergeAll<[{ a: string }, { a: string }]>,
        { a: string }>
    >,
    Expect<Equal<
        MergeAll<[{}, { a: string }]>,
        { a: string }>
    >,
    Expect<Equal<
        MergeAll<[{ a: 1 }, { c: 2 }]>,
        { a: 1; c: 2 }>
    >,
    Expect<Equal<
        MergeAll<[{ a: 1; b: 2 }, { a: 2 }, { c: 3 }]>,
        { a: 1 | 2; b: 2; c: 3 }>
    >,
    Expect<Equal<MergeAll<[{ a: 1 }, { a: number }]>, { a: number }>>,
    Expect<Equal<MergeAll<[{ a: number }, { a: 1 }]>, { a: number }>>,
    Expect<Equal<MergeAll<[{ a: 1 | 2 }, { a: 1 | 3 }]>, { a: 1 | 2 | 3 }>>,
]
