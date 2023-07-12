/**
 * medium-chainable-options
 * 实现：
 * 1.声明泛型T，函数返回时，将泛型T和新对象类型合并，并重新做Chainable类型计算，达到链式调用的效果
 * 2.将泛型T和新对象类型合并时，相同key无法覆盖，需要通过Omit剔除key
 */
type Chainable<T = {}> = {
    option: <K extends string, V>(k: K, v: V) => Chainable<Omit<T, K> & Record<K, T>>;
    get: () => T
}

/**
 * example:
 */
declare const config: Chainable

const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()

// expect the type of result to be:
interface Result {
    foo: number
    name: string
    bar: {
        value: string
    }
}