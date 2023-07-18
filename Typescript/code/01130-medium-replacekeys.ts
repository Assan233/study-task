/**
 * 实现：
 * 1.keyof 对象联合类型, 输出的是包含对象所有键的联合类型
 */
type ReplaceKeys<U, T, Y> = {
    [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K]
}


/* Question：
Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing,
A type takes three argument.
For example: */
type _NodeA = {
    type: "A"
    name: string
    flag: number
}

type _NodeB = {
    type: "B"
    id: number
    flag: number
}

type _NodeC = {
    type: "C"
    name: string
    flag: number
}

type _Nodes = _NodeA | _NodeB | _NodeC
type Test = keyof (_NodeA | _NodeB | _NodeC); // 'name' | 'age'


type _ReplacedNodes = ReplaceKeys<_Nodes, "name" | "flag", { name: number; flag: string }>
// expect: {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type _ReplacedNotExistKeys = ReplaceKeys<_Nodes, "name", { aa: number }>
// expect: {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type NodeA = {
    type: 'A'
    name: string
    flag: number
}

type NodeB = {
    type: 'B'
    id: number
    flag: number
}

type NodeC = {
    type: 'C'
    name: string
    flag: number
}

type ReplacedNodeA = {
    type: 'A'
    name: number
    flag: string
}

type ReplacedNodeB = {
    type: 'B'
    id: number
    flag: string
}

type ReplacedNodeC = {
    type: 'C'
    name: number
    flag: string
}

type NoNameNodeA = {
    type: 'A'
    flag: number
    name: never
}

type NoNameNodeC = {
    type: 'C'
    flag: number
    name: never
}

type Nodes = NodeA | NodeB | NodeC
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB

type cases = [
    Expect<Equal<ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>, ReplacedNodes>>,
    Expect<Equal<ReplaceKeys<Nodes, 'name', { aa: number }>, NodesNoName>>,
]
