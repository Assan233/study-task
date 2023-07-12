/**
 * Get Return Type
 * 实现：
 * 1.通过 infer 关键字声明 return type
 */
type MyReturnType<T> = T extends (arg: boolean) => infer U ? U : never

/**
 * example:
 */
const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}
type a = MyReturnType<typeof fn> // should be "1 | 2"