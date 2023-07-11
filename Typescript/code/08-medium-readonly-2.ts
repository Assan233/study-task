/**
 * 实现：
 * 1.通过条件类型实现了ts内置类型工具Exclude
 * 2.通过交叉类型做类型合并
 */
type MyExclude<T, K> = T extends K ? never : T;
type MyReadonly2<T, K extends keyof T> =
    {
        readonly [P in K]: T[P];
    } &
    {
        [R in MyExclude<keyof T, K>]: T[R];
    }


// example:
export interface Todo {
    title: string
    description: string
    completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK