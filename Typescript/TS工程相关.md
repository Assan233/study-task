# TS 声明文件

## declare

使用 `declare` 关键字，相当于告诉 TS 编译器，类型已经在其他地方定义了。

当使用第三方库时，很多三方库不是用 TS 写的，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

比如，在 TS 中直接使用 Vue，就会报错，

```ts
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

这时，我们可以使用 `declare` 关键字来定义 Vue 的类型，简单写一个模拟一下：

```ts
interface VueOption {
    el: string,
    data: any
}

declare class Vue {
    options: VueOption
    constructor(options: VueOption)
}

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

这样就不会报错了，使用 declare 关键字，相当于告诉 TS 编译器，这个变量（Vue）的类型已经在其他地方定义了，你直接拿去用，别报错。

需要注意的是，`declare class Vue` 并没有真的定义一个类，只是定义了类 `Vue` 的类型，**仅仅会用于编译时的检查，在编译结果中会被删除**。它编译结果是：

```js
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```



## .d.ts

通常我们会把声明语句放到一个单独的文件（`Vue.d.ts`）中，这就是声明文件，以 `.d.ts` 为后缀。

```ts
// src/Vue.d.ts
interface VueOption {
    el: string,
    data: any
}

declare class Vue {
    options: VueOption
    constructor(options: VueOption)
}

// src/index.ts
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

一般来说，ts 会解析项目中所有的 `*.ts` 文件，当然也包含以 `.d.ts` 结尾的文件。所以当我们将 `Vue.d.ts` 放到项目中时，其他所有 `*.ts` 文件就都可以获得 `Vue` 的类型定义了。

```css
/project
├── src
|  ├── index.ts
|  └── Vue.d.ts
└── tsconfig.json
```



## 使用三方库

那么当我们使用三方库的时候，是不是所有的三方库都要写一大堆 decare 的文件呢？

答案是不一定，要看社区里有没有这个三方库的 TS 类型包（一般都有）。

社区使用 `@types` 统一管理第三方库的声明文件，是由 [DefinitelyTyped](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FDefinitelyTyped%2FDefinitelyTyped%2F) 这个组织统一管理的

比如安装 lodash 的类型包，

```bash
npm install @types/lodash -D
```

只需要安装了，就可以在 TS 里正常使用 lodash 了，别的啥也不用做。

当然，如果一个库本来就是 TS 写的，就不用担心类型文件的问题，比如 `Vue3`。



## 自己写声明文件

比如你以前写了一个请求小模块 `myFetch`，代码如下，

```ts
function myFetch(url, method, data) {
    return fetch(url, {
        body: data ? JSON.stringify(data) : '',
        method
    }).then(res => res.json())
}

myFetch.get = (url) => {
    return myFetch(url, 'GET')
}

myFetch.post = (url, data) => {
    return myFetch(url, 'POST', data)
}

export default myFetch
```

现在新项目用了 TS 了，要在新项目中继续用这个 myFetch，你有两种选择：

1. 用 TS 重写 myFetch，新项目引重写的 myFetch
2. 直接引 myFetch ，给它写声明文件

如果选择第二种方案，就可以这么做，

```ts
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

declare function myFetch<T = any>(url: string, method: HTTPMethod, data?: any): Promise<T>

declare namespace myFetch { // 使用 namespace 来声明对象下的属性和方法
    const get: <T = any>(url: string) => Promise<T> 
    const post: <T = any>(url: string, data: any) => Promise<T>
}
```

比较麻烦的是需要配置才行：

创建一个 `types` 目录，专门用来管理自己写的声明文件，将 `myFetch` 的声明文件放到 `types/myFetch/index.d.ts` 中。这种方式需要配置下 `tsconfig.json` 中的 `paths` 和 `baseUrl` 字段。

```json
// tsconfig.json
{
    "compilerOptions": {
        "module": "commonjs",
        "baseUrl": "./",
        "paths": {
            "*": ["types/*"]
        }
    }
}
```

感觉直接用 TS 重写比给老项目写声明文件更好，这样就不用专门维护类型模块了。平时开发中用到的很多库，现在基本上都用 TS 重写了。