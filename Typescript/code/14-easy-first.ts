/**
 * 实现：
 * 通过条件类型判断边界条件
 */
type First<T extends any[]> = T extends [] ? never : T[0]


// example:
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3