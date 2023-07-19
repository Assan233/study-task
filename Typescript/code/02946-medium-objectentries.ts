/**
 * 实现：
 * 1.对象通过 [keyof T] 来访问对象值的联合类型
 * 2.可选情况下, K有可能是 undefined,需要通过 -? 锚定为必选
 * 3.由于Partial输出对象类型的value会新增undefined, 所以值需要过滤 undefined
 */
type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>
type ObjectEntries<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? [K, RemoveUndefined<T[K]>] : [K, T[K]]
}[keyof T];


/* Question：
Implement the type version of Object.entries
For example  */
interface _Model {
    name: string;
    age: number;
    locations: string[] | null;
}
type modelEntries = ObjectEntries<_Model> // expect: ['name', string] | ['age', number] | ['locations', string[] | null];



/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
    name: string
    age: number
    locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
    Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
    Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
    Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
    Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
    Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
]
