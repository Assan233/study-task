# 学习笔记

- <a href='./Typescript/index.md' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">Typescript</a>





## 一些命令

#### gents

`npm run gents {id} {index}`

- 通过`questionsId`读取`README`、`template.ts`、`test-cases.ts`文件自动创建 `答题ts` 文件。
- 自动在索引目录md文件里面添加对应的 **题目索引**

```js
// 创建 00059-hard-get-optional 测试文件
   npm run gents 59 1
```

#### ng

为了不用繁琐的设置`windows`环境变量，通过`npx`在 `Angular/code`寻址`ng`命令行。
