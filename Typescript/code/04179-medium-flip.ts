/**
 * 实现：
 * 1.因为对象的值要确保合法才能作为key，所以需要对T[K]的类型进行转换
 */
type Flip<T extends Record<string, string | number | boolean>> = {
    [K in keyof T as `${T[K]}`]: K
}





/* Question：
Implement the type of `just-flip-object`. Examples: */
type A = Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type B = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type C = Flip<{ pi: 3.14; bool: true }>; // {false: 'a', true: 'b'}
// No need to support nested object and values which cannot be object keys such as arrays




/**
 * Test Case：
 */
import type { Equal, Expect, NotEqual } from '@type-challenges/utils'

type cases = [
    Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
    Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
    Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
    Expect<Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>>,
]
