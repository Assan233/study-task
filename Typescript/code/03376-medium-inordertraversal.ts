/**
 * 实现：
 * 1.通过递归遍历TreeNode获取val
 * 2.由于泛型T是一个联合类型，在做extends 分布式类型计算时，输出的是一个联合类型，会错误走到true语句。
 * 所以需要通过 [] 来取消 extends 的分布式类型计算
 */
interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null>
    = [T] extends [TreeNode] ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
    : [];



/* Question：
Implement the type version of binary tree inorder traversal.
For example: */


const _tree1 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: null,
    },
} as const

type A = InorderTraversal<typeof _tree1> // [1, 3, 2]




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

const tree1 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: null,
    },
} as const

const tree2 = {
    val: 1,
    left: null,
    right: null,
} as const

const tree3 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
    },
    right: null,
} as const

const tree4 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: null,
    },
} as const

type cases = [
    Expect<Equal<InorderTraversal<null>, []>>,
    Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
    Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
    Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
    Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
]
