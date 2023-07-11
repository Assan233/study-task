/**
 * 实现：
 * 通过条件类型判断value是不是对象：
 * 1.是的话递归对象做类型计算
 * 2.否则返回value
 * 
 */
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends Object ? DeepReadonly<T[P]> : T[P]
}

/**
 * 社区上的实现：
 * 利用 never 是任何类型的子类型特性判断类型
 */
// type DeepReadonly<T> = keyof T extends never
//     ? T
//     : { readonly [k in keyof T]: DeepReadonly<T[k]> };


// example:
type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

export type Todo = DeepReadonly<X> // should be same as `Expected`
