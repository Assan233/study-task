/**
 * medium-trimleft
 * 实现：
 * 通过模板字符串匹配空格，并做递归TrimLeft类型计算
 */
type Space = ' ' | '\n' | '\t';
type TrimLeft<T extends string> = T extends `${Space}${infer R}` ? TrimLeft<R> : T;

/**
 * example:
 */
type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '