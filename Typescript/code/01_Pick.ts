/**
 * 实现:
 * 通过keyof做索引查询，输出泛型T的索引联合类型
 * 通过 in操作符，对联合类型遍历。
 */
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}


// example:
interface Todo {
    title: string
    description: string
    completed: boolean
}

export type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
