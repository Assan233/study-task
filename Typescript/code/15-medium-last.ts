/**
 * medium-last
 * 实现：
 * 填充一个类型，将length作为索引值访问
 */
// type Last<T extends unknown[]> = [never, ...T][T['length']]

/**
 * 社区的其他解法：
 * 通过infer做类型推断，获取到最后一个元素
 */
type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;


/**
 * example:
 */
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1