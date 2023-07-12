/**
 * 实现：
 * 1.通过索引number访问元组的值
 * 
 */
type TupleToObject<T extends readonly (string | number)[]> = {
    [P in T[number]]: P
}

// example:
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result = TupleToObject<typeof tuple> 
