/**
 * 实现：
 * 1.通过递归遍历数组处理
 * 2.注意此时V作为一个泛型不可以直接使用作为key,需要通过 in 来遍历泛型V
 */
type TupleToNestedObject<T extends string[], U> = T extends [infer V extends string, ...infer R extends string[]] ?
    { [K in V]: TupleToNestedObject<R, U> } : U



/* Question：
Given a tuple type T that only contains string type, and a type U, build an object recursively. */
type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
    Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
    Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
    Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]
