/**
 * easy-unshift
 * 实现：
 */
type Unshift<T extends unknown[], U extends unknown> = [U, ...T]

/**
 * example:
 */
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]