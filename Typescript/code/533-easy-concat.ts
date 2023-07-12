/**
 * easy-concat
 * 实现：
 */
type Concat<T extends any[], U extends any[]> = [...T, ...U]

// example:
export type Result = Concat<[1, 3, 6], [2, 9]> // expected to be [1, 3, 6, 2]