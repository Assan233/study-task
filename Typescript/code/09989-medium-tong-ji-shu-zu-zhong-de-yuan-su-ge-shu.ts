/**
 * 实现：
 * 1.首先用例里面有嵌套元组，那么就需要实现类型将嵌套元组拍平
 * 2.新增类型参数R通过Record缓存结果，因为需要计数，所以value必然是数组
 * 3.递归元组，通过 keyof R 判断当前元素是否已记录，如果有的话添加一个元素
 * 4.最终通过类型R输出结果，其中value只要通过length统计数量即可
 * 
 */
type Flatten<T, R extends any[] = []> =
    T extends [infer F, ...infer L] ?
    [F] extends [never] ?
    Flatten<L, R> :
    F extends any[] ?
    Flatten<L, [...R, ...Flatten<F>]>
    : Flatten<L, [...R, F]>
    : R


type Count<T, R extends Record<string | number, any[]> = {}> =
    T extends [infer F extends string | number, ...infer L] ?
    F extends keyof R ?
    Count<L, Omit<R, F> & Record<F, [...R[F], 0]>>
    : Count<L, R & Record<F, [0]>>
    : {
        [K in keyof R]: R[K]['length']
    }


type CountElementNumberToObject<T> = Count<Flatten<T>>




/* Question：
通过实现一个``CountElementNumberToObject``方法，统计数组中相同元素的个数 */
type Simple1 = CountElementNumberToObject<[]> // return {}
type Simple2 = CountElementNumberToObject<[1, 2, 3, 4, 5]> // return { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 }
type Simple3 = CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]> // return { 1: 2, 2: 2, 3: 2, 4: 1, 5: 1 }




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'
type cases = [
    Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5]>, {
        1: 1
        2: 1
        3: 1
        4: 1
        5: 1
    }
    >>,
    Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>, {
        1: 2
        2: 2
        3: 2
        4: 1
        5: 1
    }>>,
    Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>, {
        1: 3
        2: 3
        3: 2
        4: 3
        5: 1
    }>>,
    Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
    Expect<Equal<CountElementNumberToObject<['1', '2', '0']>, {
        0: 1
        1: 1
        2: 1
    }>>,
    Expect<Equal<CountElementNumberToObject<['a', 'b', ['c', ['d']]]>, {
        'a': 1
        'b': 1
        'c': 1
        'd': 1
    }>>,
]
