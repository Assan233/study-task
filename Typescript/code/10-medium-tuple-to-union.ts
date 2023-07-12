/**
 * medium-tuple-to-union
 * 实现：
 */
type TupleToUnion<T extends unknown[]> = T[number]

/**
 * example:
 */
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'