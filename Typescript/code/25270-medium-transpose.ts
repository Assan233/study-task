/**
 * 
 * 实现：
 * 1.通过遍历M[0]获取index，然后每次遍历都通过index生成单个元组结果
 * 2.PickByIndex：遍历二维元组，由对应index的值生成一个新的一维元组
 * 
 */
type PickByIndex<M extends number[][], index extends number> =
    M extends [infer A extends number[], ...infer R extends number[][]] ?
    [A[index], ...PickByIndex<R, index>] :
    [];

type Transpose<M extends number[][], U extends number[] = M[0], C extends number[][] = []> =
    U extends [infer _, ...infer R extends number[]] ?
    Transpose<M, R, [...C, PickByIndex<M, C['length']>]> :
    C;


/* Question：
The transpose of a matrix is an operator which flips a matrix over i diagonal; that is, it switches the row and column indices of the matrix A by producing another matrix, often denoted by A<sup>T</sup>. */
type Matrix = Transpose<[[1]]>; // expected to be [[1]]
type Matrix1 = Transpose<[[1, 2], [3, 4]]>; // expected to be [[1, 3], [2, 4]]
type Matrix2 = Transpose<[[1, 4], [2, 5], [3, 6]]>; // expected to be [[1, 2, 3], [4, 5, 6]]




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Transpose<[]>, []>>,
    Expect<Equal<Transpose<[[1]]>, [[1]]>>,
    Expect<Equal<Transpose<[[1, 2]]>, [[1], [2]]>>,
    Expect<Equal<Transpose<[[1, 2], [3, 4]]>, [[1, 3], [2, 4]]>>,
    Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6]]>, [[1, 4], [2, 5], [3, 6]]>>,
    Expect<Equal<Transpose<[[1, 4], [2, 5], [3, 6]]>, [[1, 2, 3], [4, 5, 6]]>>,
    Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6], [7, 8, 9]]>, [[1, 4, 7], [2, 5, 8], [3, 6, 9]]>>,
]
