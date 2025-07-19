import fs from "node:fs";
import path from "node:path";

export function load(folder: string) {
  const filesPath = path.join(__dirname, `../${folder}`);
  const files = fs.readdirSync(filesPath);
  
  const fileModules = [];
  
  files.forEach(file => {
    const filePath = path.join(filesPath, file);
    const fileModule = require(filePath);
    fileModules.push(fileModule);
  });
  
  return fileModules;
}