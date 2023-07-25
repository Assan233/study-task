/**
 * 实现：
 * 1.通过联合类型拼接字符串排列组合
 */
// 实现 Combs
type Combs<T extends string[], C extends string = never> = T extends [infer A extends string, ...infer R extends string[]] ?
    Combs<R, `${A} ${R[number]}` | C> : C




/* Question：
1. 把多个修饰键两两组合，但不可以出现相同的修饰键组合。
2. 提供的 `ModifierKeys` 中，前面的值比后面的值高，即 `cmd ctrl` 是可以的，但 `ctrl cmd` 是不允许的。 */
type A = Combs<ModifierKeys>



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']
type CaseTypeOne = 'cmd ctrl' | 'cmd opt' | 'cmd fn' | 'ctrl opt' | 'ctrl fn' | 'opt fn'

type cases = [
    Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>,
]
