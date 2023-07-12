/**
 * 实现ts内置类型工具 Exclude:
 * 1.T如果是联合类型，条件类型会对T分别做条件类型计算，最终将所有结果通过联合类型输出
 * 2.never与其他类型的联合后，为其他类型
 */
type MyExclude<T, U> = T extends U ? never : T

// example:
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'