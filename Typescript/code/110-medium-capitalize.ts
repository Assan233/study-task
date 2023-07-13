/**
 * medium-capitalize
 * 实现：
 */
export type Capitalize<T extends string> = T extends `${infer R}${infer U}` ? `${Uppercase<R>}${U}` : never

/**
 * example:
 */
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'