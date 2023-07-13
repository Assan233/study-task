/**
 * medium-append-argument
 * 实现：
 */
type AppendArgument<T extends Function, U> =
    T extends (...args: infer R) => infer N ? (...args: [...R, U]) => N : never

/**
 * example:
 */
type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean>
// expected be (a: number, b: string, x: boolean) => number