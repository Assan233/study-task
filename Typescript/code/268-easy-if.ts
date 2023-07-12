/**
 * easy-if
 * 实现：
 */
type If<T, U, V> = T extends true ? U : V


// example:
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'