/**
 * easy-push
 * 实现：
 */
type Push<T extends unknown[], U extends unknown> = [...T, U]

/**
 * example:
 */
type Result = Push<[1, 2], '3'> // [1, 2, '3']