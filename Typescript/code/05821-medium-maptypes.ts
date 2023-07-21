/**
 * 实现：
 * 1.通过判断value是否满足值的映射关系，才会将值做类型替换
 */
type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
    [K in keyof T]: T[K] extends R['mapFrom']
    ? R extends { mapFrom: T[K] }
    ? R['mapTo']
    : never
    : T[K]
}



/* Question：
Implement `MapTypes<T, R>` which will transform types in object T to different types defined by type R which has the following structure
Examples: */
type StringToNumber = {
    mapFrom: string; // value of key which value is string
    mapTo: number; // will be transformed for number
}
type StringToDate = { mapFrom: string; mapTo: Date; }

type A = MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber>
// gives { iWillBeANumberOneDay: number; }
type B = MapTypes<{ iWillBeNumberOrDate: string }, StringToDate | StringToNumber>
// gives { iWillBeNumberOrDate: number | Date; }
type C = MapTypes<{ iWillBeANumberOneDay: string, iWillStayTheSame: Function }, StringToNumber>
// gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }




/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MapTypes<{ stringToArray: string }, { mapFrom: string; mapTo: [] }>, { stringToArray: [] }>>,
    Expect<Equal<MapTypes<{ stringToNumber: string }, { mapFrom: string; mapTo: number }>, { stringToNumber: number }>>,
    Expect<Equal<MapTypes<{ stringToNumber: string; skipParsingMe: boolean }, { mapFrom: string; mapTo: number }>, { stringToNumber: number; skipParsingMe: boolean }>>,
    Expect<Equal<MapTypes<{ date: string }, { mapFrom: string; mapTo: Date } | { mapFrom: string; mapTo: null }>, { date: null | Date }>>,
    Expect<Equal<MapTypes<{ date: string }, { mapFrom: string; mapTo: Date | null }>, { date: null | Date }>>,
    Expect<Equal<MapTypes<{ fields: Record<string, boolean> }, { mapFrom: Record<string, boolean>; mapTo: string[] }>, { fields: string[] }>>,
    Expect<Equal<MapTypes<{ name: string }, { mapFrom: boolean; mapTo: never }>, { name: string }>>,
    Expect<Equal<MapTypes<{ name: string; date: Date }, { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }>, { name: boolean; date: string }>>,
]
