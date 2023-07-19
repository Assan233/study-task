# Typescript



## 生成ts测试文件

`Typescript` 目录下提供了创建测试文件的脚本：

- 通过`questionsId`读取`README`、`template.ts`、`test-cases.ts`文件自动创建 `答题ts` 文件。
- 自动在索引目录md文件里面添加对应的 **题目索引**

### 如何使用

1. 获取题目`ID`以及 **索引目录的索引值**

2. 执行创建脚本 ` node ./Typescript/gen.js {id} {index}`

   ```bash
   // 创建 00059-hard-get-optional 测试文件
   node ./Typescript/gen.js 59 1
   ```

   
## 题目

> **TS内置类型工具实现**:  <a href='./code/实现TS内置类型工具.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">实现TS内置类型工具</a>


### easy

1. <a href='./code/01_Pick.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">01_Pick</a>
2.  <a href='./code/07-easy-readonly.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">07-easy-readonly</a>
3.  <a href='./code/11-easy-tuple-to-object.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">11-easy-tuple-to-object</a>
4.  <a href='./code/14-easy-first.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">14-easy-first</a>
5. <a href='./code/18-easy-tuple-length.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">18-easy-tuple-length</a>
6. <a href='./code/43-easy-exclude.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">43-easy-exclude</a>
7. <a href='./code/189-easy-awaited.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">189-easy-awaited</a>
8. <a href='./code/268-easy-if.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">268-easy-if</a>
9. <a href='./code/533-easy-concat.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">533-easy-concat</a>
10. <a href='./code/898-easy-includes.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">898-easy-includes</a>
11. <a href='./code/3057-easy-push.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">3057-easy-push</a>
12. <a href='./code/3060-easy-unshift.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">3060-easy-unshift</a>
13. <a href='./code/3312-easy-parameters.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">3312-easy-parameters</a>


### medium
1. <a href='./code/02-medium-return-type.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">02-medium-return-type</a>
2. <a href='./code/03-medium-omit.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">03-medium-omit</a>
3. <a href='./code/08-medium-readonly-2.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">08-medium-readonly-2</a>
4. <a href='./code/09-medium-deep-readonly.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">09-medium-deep-readonly</a>
5. <a href='./code/10-medium-tuple-to-union.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">10-medium-tuple-to-union</a>
6. <a href='./code/12-medium-chainable-options.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">12-medium-chainable-options</a>
7. <a href='./code/15-medium-last.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">15-medium-last</a>
8. <a href='./code/16-medium-pop.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">16-medium-pop</a>
9. <a href='./code/20-medium-promise-all.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">20-medium-promise-all</a>
10. <a href='./code/62-medium-type-lookup.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">62-medium-type-lookup</a>
11. <a href='./code/106-medium-trimleft.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">106-medium-trimleft</a>
12. <a href='./code/108-medium-trim.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">108-medium-trim</a>
13. <a href='./code/110-medium-capitalize.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">110-medium-capitalize</a>
14. <a href='./code/116-medium-replace.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">116-medium-replace</a>
15. <a href='./code/119-medium-replaceall.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">119-medium-replaceall</a>
16. <a href='./code/191-medium-append-argument.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">191-medium-append-argument</a>
17. <a href='./code/00296-medium-permutation.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">00296-medium-permutation</a>
18. <a href='./code/00298-medium-length-of-string.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">00298-medium-length-of-string</a>
19. <a href='./code/00459-medium-flatten.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">00459-medium-flatten</a>
20. <a href='./code/00527-medium-append-to-object.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">00527-medium-append-to-object</a>
21. <a href='./code/00529-medium-absolute.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">00529-medium-absolute</a>
22. <a href='./code/00531-medium-string-to-union.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">00531-medium-string-to-union</a>
23. <a href='./code/00599-medium-merge.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">00599-medium-merge</a>
24. <a href='./code/00612-medium-kebabcase.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">00612-medium-kebabcase</a>
25. <a href='./code/00612-medium-kebabcase.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">00612-medium-kebabcase</a>
26. <a href='./code/00645-medium-diff.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">00645-medium-diff</a>
27. <a href='./code/00949-medium-anyof.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">00949-medium-anyof</a>
28. <a href='./code/01042-medium-isnever.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">01042-medium-isnever</a>
29. <a href='./code/01097-medium-isunion.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">01097-medium-isunion</a>
30. <a href='./code/01130-medium-replacekeys.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">01130-medium-replacekeys</a>
31. <a href='./code/01367-medium-remove-index-signature.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">01367-medium-remove-index-signature</a>
32. <a href='./code/01978-medium-percentage-parser.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">01978-medium-percentage-parser</a>
33. <a href='./code/02070-medium-drop-char.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">02070-medium-drop-char</a>
34. <a href='./code/02257-medium-minusone.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">02257-medium-minusone</a>
35. <a href='./code/02595-medium-pickbytype.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">02595-medium-pickbytype</a>
36. <a href='./code/02688-medium-startswith.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">02688-medium-startswith</a>
37. <a href='./code/02693-medium-endswith.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">02693-medium-endswith</a>
38. <a href='./code/02757-medium-partialbykeys.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">02757-medium-partialbykeys</a>
39. <a href='./code/02759-medium-requiredbykeys.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">02759-medium-requiredbykeys</a>
40. <a href='./code/02793-medium-mutable.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">02793-medium-mutable</a>
41. <a href='./code/02852-medium-omitbytype.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">02852-medium-omitbytype</a>
42. <a href='./code/02946-medium-objectentries.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">02946-medium-objectentries</a>
43. <a href='./code/03062-medium-shift.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">03062-medium-shift</a>
44. <a href='./code/03188-medium-tuple-to-nested-object.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">03188-medium-tuple-to-nested-object</a>
45. <a href='./code/03192-medium-reverse.ts' style="background-image: linear-gradient(#D59329,#C6841A);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">03192-medium-reverse</a>