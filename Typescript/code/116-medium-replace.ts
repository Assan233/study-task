/**
 * medium-replace
 * 实现：
 * 模板字符占位实现替换
 */
export type Replace<T extends string, U extends string, R extends string> =
    T extends `${infer A}${U}${infer B}` ? `${A}${R}${B}` : T

/**
 * example:
 */
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'