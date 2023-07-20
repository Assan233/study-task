/**
 * 实现：
 * 1.通过缓存当前数的前一/二位置的数字，做累加
 * 2.判断当前计算次数是否到达目标次数，不是的话递归计算
 * 
 * 斐波那契序列: 前面2个数之和等于当前数
 * C: 缓存当前计算次数，提供初始length=3
 * F: 缓存前一个数据
 * S: 缓存前二个数据
 * 
 * 1.通过数组length统计次数以及缓存当前位置的前一/二的数字
 * 2.初始化第一/二的数字，让后续累加有初始值
 * 3.对于求第一/二的值，做边界判断
 */
type genArr<T extends number, U extends number[] = []> = T extends U['length'] ? U : genArr<T, [...U, 1]>;

type Fibonacci<T extends number, S extends number[] = [1], F extends number[] = [1], C extends number[] = [1, 1, 1]> = T extends 1 | 2 ?
    1 :
    T extends C['length'] ?
    [...F, ...S]['length'] :
    Fibonacci<T, F, [...S, ...F], [...C, 1]>



/* Question：
Implement a generic Fibonacci\<T\> takes an number T and returns it's corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).
The sequence star:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
For example */

type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Fibonacci<1>, 1>>,
    Expect<Equal<Fibonacci<2>, 1>>,
    Expect<Equal<Fibonacci<3>, 2>>,
    Expect<Equal<Fibonacci<8>, 21>>,
]
