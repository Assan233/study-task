// 通过 Exclude 实现：
type MyOmit<T, K extends keyof T> = {
    [P in Exclude<K, K>]: T[P]
}

// example:
interface Todo {
    title: string
    description: string
    completed: boolean
}

export type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
    completed: false,
}
