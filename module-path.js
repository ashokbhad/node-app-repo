const path = require("path");

console.log("=============== Built in Module - path =======================");
console.log(__dirname); // /Users/gajanan/Documents/Angular/node/node-app-repo

console.log(`======= File Extension ==========`);
const fileName =
  "/Users/gajanan/Documents/Angular/node/node-app-repo/sample-file.txt";
const fileExtension = path.extname(fileName);
console.log(`File Extension is: ${fileExtension}`);

const fileNamePackage =
  "/Users/gajanan/Documents/Angular/node/node-app-repo/package.json";
const extension = path.extname(fileNamePackage);
console.log(`File Extension is: ${extension}`);

console.log(`======= Directory Name ==========`);
const dirName = path.dirname(fileName);
console.log(`Directory Name: ${dirName}`);

console.log(`======= File Name ==========`);
const baseName = path.basename(fileName);
console.log(`Base Name : ${baseName}`);
