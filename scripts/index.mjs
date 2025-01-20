import { copyFileSync, existsSync, mkdirSync, readFile, readdirSync, writeFile } from "fs";
import path, { resolve } from "path";

const log = (message) => console.log(message);
const successLog = (message) => console.log(message);
const errorLog = (error) => console.log(error);

log('请输入要生成的"页面名称:页面描述"、会生成在 /src/projects 目录下');

process.stdin.on('data', async (chunk) => {
  const content  = String(chunk).trim().toString();
  const inputSearch = content.search(":");
  if (inputSearch == -1) {
    errorLog("格式错误，请重新输入");
    return;
  }

  const inputName = content.split(':')[0];
  const inputDesc = content.split(':')[1] || inputName;
  successLog(`将在 /src/projects 目录下创建 ${inputName} 文件夹`);

  const targetPath = path.resolve("./src/projects", inputName);
  const pageExists = existsSync(targetPath);
  if (pageExists) {
    errorLog("页面已经存在，请重新输入");
    return;
  }

  await readFile(
    path.resolve("./scripts", "multiProjects.json"),
    'utf-8',
    (err, data) => {
      let datas = JSON.parse(data);
      let index = datas.findIndex((ele) => {
        return ele.chunk == inputName;
      });
      if (index == -1) {
        let obj = {
          chunk: inputName,
          chunkName: inputDesc
        }
        datas.push(obj);
        setFile(datas);
      }
    }
  );

  function setFile(datas) {
    writeFile(
      path.resolve("./scripts","multiProjects.json"),
      JSON.stringify(datas),
      "utf-8",
      (err) => {
        if (err) throw err;
        mkdirSync(targetPath);
        const sourcePath = resolve("./scripts/template");
        copyFile(sourcePath, targetPath);
        process.stdin.emit("end")
      }
    )
  }
});

process.stdin.on("end", () => {
  console.log("exit");
  process.exit();
});

const isExist = (path) => {
  if (!existsSync(path)) {
    mkdirSync(path);
  }
}

const copyFile = (sourcePath, targetPath) => {
  const sourceFile = readdirSync(sourcePath, { withFileTypes:true });
  
  sourceFile.forEach((file) => {
    const newSourcePath = path.resolve(sourcePath, file.name);
    const newTargetPath = path.resolve(targetPath, file.name);

    if (file.isDirectory()) {
      isExist(newTargetPath);
      copyFile(newSourcePath, newTargetPath);
    } else {
      copyFileSync(newSourcePath, newTargetPath);
    }
  })
}