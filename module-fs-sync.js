const fs = require("fs"); // File System module
console.log(`=========== readFileSync() ===========`);
console.log("============== START ===================");
try {
  // Synchronously reading the file and storing the contents in 'data'
  const data = fs.readFileSync("./sample-file.txt", "utf8");
  console.log(`Reading the contents from the File: sample-file.txt`);
  console.log("====================================");
  console.log(data);
} catch (error) {
  console.log("Error:", error);
}
console.log("============== END ===================");
// nodemon start module-fs-sync.js
