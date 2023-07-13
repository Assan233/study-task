/**
 * medium-trim
 * 实现：
 */
export type Space = ' ' | '\n' | '\t';
type Trim<T extends string> =
    T extends `${infer R}${Space}` | `${Space}${infer R}` ? Trim<R> : T

/**
 * example:
 */
type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'