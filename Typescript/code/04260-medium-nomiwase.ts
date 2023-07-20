/**
 * 实现：
 * 1.需要将字符串拆分为联合类型
 * 2.和实现BEM组合类似，利用字符串将联合类型组合，得到排列组合字符串
 * 3.由于预期字符不能重复，所以利用映射类型key遍历的方式获取到当前字符并Exclude递归字符，最终通过映射类型[keyof T]的方式获取值的联合类型
 */
type StringToUnion<S extends string> = S extends `${infer A}${infer R}` ? `${A}` | StringToUnion<R> : ''
type AllCombinations<S extends string, U extends string = StringToUnion<S>> =
    [U] extends [never] ?
    '' :
    '' | {
        [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}`
    }[U]




/* Question：
Implement type AllCombinations<S> that return all combinations of strings which use characters from S at most once.
For example: */
type AllCombinations_ABC = AllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'





/**
 * Test Case：
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<AllCombinations<''>, ''>>,
    Expect<Equal<AllCombinations<'A'>, '' | 'A'>>,
    Expect<Equal<AllCombinations<'AB'>, '' | 'A' | 'B' | 'AB' | 'BA'>>,
    Expect<Equal<AllCombinations<'ABC'>, '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'>>,
    Expect<Equal<AllCombinations<'ABCD'>, '' | 'A' | 'B' | 'C' | 'D' | 'AB' | 'AC' | 'AD' | 'BA' | 'BC' | 'BD' | 'CA' | 'CB' | 'CD' | 'DA' | 'DB' | 'DC' | 'ABC' | 'ABD' | 'ACB' | 'ACD' | 'ADB' | 'ADC' | 'BAC' | 'BAD' | 'BCA' | 'BCD' | 'BDA' | 'BDC' | 'CAB' | 'CAD' | 'CBA' | 'CBD' | 'CDA' | 'CDB' | 'DAB' | 'DAC' | 'DBA' | 'DBC' | 'DCA' | 'DCB' | 'ABCD' | 'ABDC' | 'ACBD' | 'ACDB' | 'ADBC' | 'ADCB' | 'BACD' | 'BADC' | 'BCAD' | 'BCDA' | 'BDAC' | 'BDCA' | 'CABD' | 'CADB' | 'CBAD' | 'CBDA' | 'CDAB' | 'CDBA' | 'DABC' | 'DACB' | 'DBAC' | 'DBCA' | 'DCAB' | 'DCBA'>>,
]
