/**
 * 实现：
 */
type AppendToObject<T extends Record<string, unknown>, U extends string, V> = {
    [P in (keyof T | U)]: P extends keyof T ? T[P] : V
}



/* Question：
实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。
例如: */


type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }






/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type test1 = {
    key: 'cat'
    value: 'green'
}

type testExpect1 = {
    key: 'cat'
    value: 'green'
    home: boolean
}

type test2 = {
    key: 'dog' | undefined
    value: 'white'
    sun: true
}

type testExpect2 = {
    key: 'dog' | undefined
    value: 'white'
    sun: true
    home: 1
}

type test3 = {
    key: 'cow'
    value: 'yellow'
    sun: false
}

type testExpect3 = {
    key: 'cow'
    value: 'yellow'
    sun: false
    moon: false | undefined
}

type cases = [
    Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
    Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
    Expect<Equal<AppendToObject<test3, 'moon', false | undefined>, testExpect3>>,
]
