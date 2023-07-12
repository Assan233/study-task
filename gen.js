let fs = require("fs");

// 参数
const fileName = process.argv[2];
const pos = process.argv[3];

const path = `./Typescript/code/${fileName}.ts`;
const names = fileName.split("-");
names.shift();
const title = names.join("-");

// 写入ts文件
fs.writeFile(
    path,
    `/**
 * ${title}
 * 实现：
 */
\n
/**
 * example:
 */`,
    console.log
);

// 写入md
const mdPath = `./Typescript/index.md`;
const mdCode = `<a href='./code/${fileName}.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">${fileName}</a>`;
fs.open(mdPath, "a", (err, fd) => {
    fs.write(fd, `\n${pos}. ${mdCode}`, 0, console.log);
    fs.close(fd, console.log);
});
