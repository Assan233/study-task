const fs = require("fs");
const path = require("path");

const questionPath = "./Typescript/questions";
const copyFiles = ["README.zh-CN.md", "template.ts", "test-cases.ts"];
const outputPath = "./Typescript/code";
// 参数
const id = process.argv[2];
const mdIndex = process.argv[3];

genQuestion(id);

/**
 * 生成ts文件
 * @param {string} id 题目id
 */
function genQuestion(id) {
    const questionId = fillZero(id);
    const { folderPath, folderName } = getQuestionFolder(questionId);
    const tsPath = `${outputPath}/${folderName}.ts`;
    genTS(folderPath, tsPath);
    createMdIndex(folderName);
}

/**
 * 文件索引写入md文件目录
 * @param {string} name 文件名
 */
function createMdIndex(name) {
    const mdPath = `./Typescript/index.md`;
    const mdCode = `<a href='./code/${name}.ts' style="background-image: linear-gradient(#7EAB1B,#72A00F);color:#fff;padding:4px 5px;border-radius:4px 5px;font-size:13px;">${name}</a>`;
    fs.open(mdPath, "a", (err, fd) => {
        fs.write(fd, `\n${mdIndex}. ${mdCode}`, 0, console.log);
        fs.close(fd, console.log);
    });
}

/**
 * 生成ts文件
 * @param {string} sourceFolder ts问题的文件夹
 * @param {string} targetPath 生成的目标路径
 */
async function genTS(sourceFolder, targetPath) {
    const syncReaders = copyFiles.map((fileName) =>
        readFile(`${sourceFolder}/${fileName}`)
    );
    const [mdData, tplData, caseData] = await Promise.all(syncReaders);
    const _tplData = `/**\n * 实现：\n */\n${tplData}`;
    const _mdData = `Question：${getMdQuestion(mdData)}`;
    const _caseData = `/**\n * Test Case：\n */\n${caseData}`;

    // 生成ts文件
    fs.writeFile(
        targetPath,
        `${_tplData}\n${_mdData}\n${_caseData}`,
        console.log
    );
}

function fillZero(id) {
    let minLength = 5;
    let idLength = id.length;
    if (idLength === minLength) {
        return id;
    }
    return new Array(minLength - idLength).fill("0").join("") + id;
}

function getQuestionFolder(questionId) {
    const files = fs.readdirSync(questionPath);
    // console.log(files, '文件列表')
    for (let i = 0; i < files.length; i++) {
        const folderName = files[i];
        if (folderName.indexOf(questionId) !== -1) {
            let folderPath = path.join(questionPath, folderName);
            return {
                folderPath,
                folderName,
            };
        }
    }
    
    console.error("题目不存在");
    process.exit(0);
}

function readFile(path) {
    return new Promise((resolve) => {
        fs.readFile(path, "utf8", (err, data) => {
            console.log(err);
            resolve(data);
        });
    });
}

function getMdQuestion(data) {
    const headerRex = /<!--info-header-start-->(.*?)<!--info-header-end-->/g;
    const footerRex = /<!--info-footer-start-->(.*?)<!--info-footer-end-->/g;
    return data
        .replace(footerRex, "")
        .replace(headerRex, "")
        .replace(/```/g, "")
        .replace(/ts/g, "")
        .replace(/typescript/g, "");
}
