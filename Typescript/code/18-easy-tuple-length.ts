/**
 * 实现：
 * 通过索引访问数组对象的属性
 */
type Length<T extends any[]> = T['length']

/**
 * 社区上有意思的实现：
 */
// type Length<T extends any> = T extends { length : infer R } ? R : never;

// example:
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5