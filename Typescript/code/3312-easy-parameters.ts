/**
 * easy-parameters
 * 实现：
 * 1.通过 infer 关键字声明剩余参数
 */
type MyParameters<T extends Function> = T extends (...args: infer U) => unknown ? U : never

/**
 * example:
 */
const foo = (arg1: string, arg2: number): void => { }

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]