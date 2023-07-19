/**
 * 实现：
 * 1.实际上就是 reverse arguments
 */
type Reverse<T> = T extends [...infer R, infer U] ? [U, ...Reverse<R>] : []
type FlipArguments<T> = T extends (...args: infer A) => infer U ?
    (...args: Reverse<A>) => U : never



/* Question：
Implement the type version of lodash's _.flip.
Type FlipArguments<T> requires function type T and returns a new function type which has the same return type of T but reversed parameters.
For example: */


type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
// (arg0: boolean, arg1: number, arg2: string) => void





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
    Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
    Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]

type errors = [
    FlipArguments<'string'>,
    FlipArguments<{ key: 'value' }>,
    FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
    FlipArguments<null | undefined>,
]
