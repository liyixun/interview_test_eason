// fs 广度优先遍历
let stack = [];
let path = require('path');
let fs = require('fs');


function dfs(path) {
  readByPath(path);
  while (stack.length) {
    let tempPath = stack.pop();
    readByPath(tempPath);
  }
}

function readByPath(inputPath) {
  let filePath = path.resolve(inputPath);
  fs.readdir(filePath, (error, files) => {
    if (error) {
      console.log(error);
    } else {
      files.forEach(fileItem => {
        let tempFilePath = path.join(filePath, fileItem);
        fs.stats(tempFilePath, (error, stats) => {
          if (stats.isFile()) {
            console.log(tempFilePath);
          } else {
            readByPath(tempFilePath);
          }
        });
      });
    }
  });
}

dfs('xxxxx');


