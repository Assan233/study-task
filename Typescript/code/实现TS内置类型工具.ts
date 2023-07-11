interface Info {
    name: string;
    age: number;
}

// Partial
type IPartial<T> = {
    [K in keyof T]?: T[K]
}
// Readonly
type IReadonly<T> = {
    readonly [K in keyof T]: T[K]
}
// Pick
type IPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
// Omit
type IOmit<T, K extends keyof any> = {
    [P in Exclude<keyof T, K>]: T[P]
}
type IOmit2<T, K extends keyof any> = IPick<T, Exclude<keyof T, K>>
// Parameters
type IParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : []
// ReturnType
type IReturnType<T extends (...args: any) => any> = T extends (any) => infer P ? P : any


/**
 * test
 */
const infoA: IPartial<Info> = { name: 'assan' }
const infoB: IReadonly<Info> = { name: 'assan', age: 33 }
const infoC: IPick<Info, 'name'> = { name: 'assan' }
const infoD: IOmit2<Info, 'name'> = { age: 2 }
const infoE: IParameters<(m: string, n: Object) => void> = ['3223', {}]
const infoF: IReturnType<() => string> = 'assan'

