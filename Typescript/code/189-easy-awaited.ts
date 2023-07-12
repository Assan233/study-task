/**
 * easy-awaited
 * 实现：
 * 1.通过infer声明类型变量P
 * 2.如果P是 Promise实例，递归做类型计算
 */
type MyAwaited<T> = T extends Promise<infer P> ?
    (P extends Promise<any> ? MyAwaited<P> : P)
    : never

// example: if we have Promise<ExampleType> how to get ExampleType?
type ExampleType = Promise<string>
export type Result = MyAwaited<ExampleType> // string