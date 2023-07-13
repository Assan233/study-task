/**
 * medium-replace-all
 * 实现：
 */
type ReplaceAll<T extends string, U extends string, R extends string> = T extends `${infer A}${U}${infer B}` ?
    ReplaceAll<`${A}${R}${B}`, U, R> : T

/**
 * example:
 */
type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'