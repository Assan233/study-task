/**
 * easy-includes
 * 实现：
 * 1.取数组第一个元素和泛型U比较
 * 2.如果不相等，则通过剩余类型递归做类型计算
 */
type Equal<A, B> = A extends B ? true : false
type Includes<T extends readonly unknown[], U> = T extends [infer First, ...infer Rest] ?
    (Equal<U, First> extends true ? true : Includes<Rest, U>)
    : false


// example:
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'dio'> // false